#ifndef PLUGINPROCESSOR_H
#define PLUGINPROCESSOR_H

// Standard Library Headers
#include <algorithm>  // std::sort
#include <cstring>    // Include this header for std::memcpy
#include <functional> //  std::hash
#include <future>     //   std::promise and std::future
#include <map>


// Third-Party Library Headers
#include <choc_HTTPServer.h>
#include <choc_StringUtilities.h>
#include <choc_javascript.h>
#include <choc_javascript_QuickJS.h>
#include <choc_javascript_Console.h>
#include <elem/Runtime.h>
#include <juce_audio_basics/juce_audio_basics.h>
#include <juce_audio_formats/juce_audio_formats.h>
#include <juce_audio_processors/juce_audio_processors.h>
#include <juce_dsp/juce_dsp.h>

// Local Headers
#include "Asset.h"
#include "AssetHelpers.h"
#include "WebViewEditor.h"
#include "ViewClientInstance.h"
#include "SlotManager.h"
#include "SlotName.h"
#include "UserBankManager.h"

// Forward Declarations
class WebServer;
class WebViewEditor;
class ViewClientInstance;
class SlotManager;
class UserBankManager;
class AudioFileLoader;  // Forward declaration

//=== Persisted state keys
inline std::string REVERSE_BUFFER_PREFIX = "REVERSED_";
inline std::string PERSISTED_HOST_PARAMETERS_KEY = "hostParameters";
inline std::string PERSISTED_VIEW_STATE_KEY = "viewState";
inline std::string PERSISTED_USER_FILENAMES = "userFilenames";
inline std::string PERSISTED_ASSET_MAP = "assetMap";
//=== Inter Layer communication
inline std::string MAIN_DSP_JS_FILE = "dsp.main.js";
inline std::string MAIN_PATCH_JS_FILE = "patch.main.js";
inline std::string SAMPLE_RATE_KEY = "sampleRate";
inline std::string USER_BANK_KEY = "userBank";
inline std::string NATIVE_MESSAGE_FUNCTION_NAME = "__postNativeMessage__";
inline std::string LOG_FUNCTION_NAME = "__log__";
// === Front end is listening for these on WS
// @see Cables patch
// todo: pass these in to the patch and populate them as key values
// in the patch var getters
inline std::string WS_RESPONSE_KEY_FOR_STATE = "NEL_STATE_FOR_VIEW";
inline std::string WS_RESPONSE_FILENAMES = "NEL_FILENAMES_FOR_VIEW";
inline std::string WS_RESPONSE_KEY_FOR_PEAKS = "NEL_PEAKS_FOR_VIEW";
inline std::string WS_CURRENT_SLOT_INDEX = "NEL_CURRENT_SLOT_INDEX";
inline std::string WS_STRUCTURE_INDEX = "NEL_STRUCTURE_INDEX";
// === Local dsp JS is listening for these
// @see dsp/handleGraphUpdate.ts @parseNewState()
inline std::string WS_RESPONSE_VFS_KEYS = "NEL_VFS_KEYS";

inline std::array<int, 3> HZ_OPTIONS = { 160, 320, 1200 };

//==============================================================================
class Processor final : public juce::AudioProcessor,
                        public juce::AudioProcessorParameter::Listener,
                        private juce::AsyncUpdater
{
public:


    juce::AudioFormatManager formatManager;
    void createParameters(const std::vector<elem::js::Value>& parameters);
    std::unique_ptr<AudioFileLoader> fileLoader;
    //==============================================================================
    Processor();
    ~Processor() override;

    //==============================================================================

    juce::AudioProcessorEditor* createEditor() override;
    bool hasEditor() const override;
    WebViewEditor* editor = nullptr;

    //==============================================================================
    void prepareToPlay(double sampleRate, int samplesPerBlock) override;
    void releaseResources() override;
    bool isBusesLayoutSupported(const juce::AudioProcessor::BusesLayout& layouts) const override;
    void processBlock(juce::AudioBuffer<float>&, juce::MidiBuffer&) override;
    //==============================================================================
    const juce::String getName() const override;

    bool acceptsMidi() const override;
    bool producesMidi() const override;
    bool isMidiEffect() const override;
    double getTailLengthSeconds() const override;

    //==============================================================================
    int getNumPrograms() override;
    int getCurrentProgram() override;
    void setCurrentProgram(int index) override;
    const juce::String getProgramName(int index) override;
    void changeProgramName(int index, const juce::String& newName) override;

    //==============================================================================
    void getStateInformation(juce::MemoryBlock& destData) override;
    void setStateInformation(const void* data, int sizeInBytes) override;

    //==============================================================================
    /** Implement the AudioProcessorParameter::Listener interface. */
    void parameterValueChanged(int parameterIndex, float newValue) override;
    void parameterGestureChanged(int parameterIndex, bool gestureIsStarting) override;

    //==============================================================================
    /** Implement the AsyncUpdater interface. */
    void handleAsyncUpdate() override;

    //==============================================================================

    /** Internal helper for initializing the embedded JS engine. */
    void initJavaScriptEngine();

    /** Internal helper for propagating processor state changes. */
    void dispatchStateChange();

    /** Function to send info about the backend server to the View */
    void dispatchServerInfo();

    /** User file count */
    void dispatchUserFileCount();

    /** error to UI */
    void dispatchError(std::string const& name, std::string const& message);

    /** log to UI */
    void dispatchNativeLog(std::string const& name, std::string const& message);



    /**
     *
     * @param expr javascript expression to evaluate in the view context
     * @return true if the view exists, false if not
     */
    bool sendJavascriptToUI(const std::string& expr) const;

    static std::string serialize(const std::string& function, const elem::js::Object& data,
                          const juce::String& replacementChar = "%");
    static std::string serialize(const std::string& function, const choc::value::Value& data,
                          const juce::String& replacementChar = "%");

    // for file chooser
    juce::String delimiter = ";";

    //==============================================================================

private:
    // The maximum number of error messages to keep in the queue
    size_t MAX_ERROR_LOG_QUEUE_SIZE = 200;
    static std::optional<std::string> loadDspEntryFileContents() ;
    std::optional<std::string> loadPatchEntryFileContents() const;
    std::atomic<bool> runtimeSwapRequired{false};
    std::atomic<bool> shouldInitialize{false};
    double lastKnownSampleRate = 0;
    int lastKnownBlockSize = 0;

    //===== Elementary Audio , js stores and context  ==//
    choc::javascript::Context jsContext;
    juce::AudioBuffer<float> scratchBuffer;
    std::unique_ptr<elem::Runtime<float>> elementaryRuntime;
    std::queue<std::string> errorLogQueue;

    friend class ViewClientInstance;
    std::map<std::string, std::variant<juce::AudioParameterFloat*, juce::AudioParameterBool*>> parameterMap;

    //=============================================

public:
    using Results = juce::StringPairArray;

    elem::js::Object state;
    std::map<SlotName, Asset> assetsMap;
    elem::js::Object assetState;

    int userCutoffChoice = HZ_OPTIONS[0];
    std::atomic<bool> userFilesWereImported = false;
    bool userScapeMode = false;

    void clear_userFiles_in_assets_map();
    bool initialiseDefaultFileAssets();
    bool process_default_IRs();
    void inspectVFS();
    void pruneVFS() const;

    bool validateUserUpload(const juce::File& selectedFile) ;
    Results uploadedFileData;

    static std::vector<float> getReducedAudioBuffer(const juce::AudioBuffer<float>& buffer);
    bool process_user_IR(const juce::File& file, const SlotName& targetSlot);
    void processPersistedAssetState(const elem::js::Object& target_slot_and_serialised_asset);
    bool importPeakDataForView(const juce::AudioBuffer<float>& buffer);

    vfs::UserBankManager userBankManager; // todo: DEPRECATED ?
    std::string prefixUserBank(const std::string& name) const;

    // Slot Manager instance
    std::unique_ptr<SlotManager> slotManager; // Use a smart pointer to manage the slot manager
    std::vector<std::string> current_VFS_Keys;

private:
    int USERBANK = 0;
    void runWebServer();
    uint16_t serverPort = 0;
    uint16_t getServerPort() const { return serverPort; }

    juce::dsp::StateVariableTPTFilter<float> stateVariableFilter; // For filtering the imported IRs
    std::unique_ptr<ViewClientInstance> clientInstance; // Use a smart pointer to store the client instance
    std::unique_ptr<choc::network::HTTPServer> server; // Use a smart pointer to manage the server

    //==============================================================================
    // A simple "dirty list" abstraction here for propagating realtime parameter
    // value changes
    struct ParameterReadout
    {
        float value = 0;
        bool dirty = false;
    };

    std::list<std::atomic<ParameterReadout>> parameterReadouts;
    static_assert(std::atomic<ParameterReadout>::is_always_lock_free);

    //==============================================================================
    // Keyzy License Activator
    //     Keyzy::ProductData productData{"YOUR_APP_ID", "YOUR_API_KEY", "YOUR_PRODUCT_CODE", "YOUR_CRYPTION_KEY"};

    // Keyzy::ProductData productData{
    //     "JXgnTvml", "Q4PbX--------1QU5b",
    //     "01a---------30b", "3qKlXJ2---------------YNIOIhz"
    // };
    // Keyzy::KeyzyLicenseActivator licenseActivator{productData};
    // Keyzy::LicenseStatus licenseStatus = Keyzy::LicenseStatus::NOT_AUTHORIZED;

    //==============================================================================
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(Processor)
};

// namespace unlock
// {
//     inline std::string errorStatuses(Keyzy::LicenseStatus status)
//     {
//         switch (status)
//         {
//         case Keyzy::LicenseStatus::EXPIRED:
//             return "Expired";

//         case Keyzy::LicenseStatus::INVALID:
//             return "Invalid";

//         case Keyzy::LicenseStatus::NOT_AUTHORIZED:
//             return "Not authorized";

//         case Keyzy::LicenseStatus::SERIAL_INVALID:
//             return "Serial invalid";

//         case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST:
//             return "Product does not exist";

//         case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST_FOR_USER:
//             return "Product does not exist";

//         case Keyzy::LicenseStatus::PRODUCT_NOT_ACTIVE:
//             return "Product is not active";

//         case Keyzy::LicenseStatus::SKU_NOT_EXIST:
//             return "SKU does not exist";

//         case Keyzy::LicenseStatus::SKU_NOT_ACTIVE:
//             return "SKU is not active";

//         case Keyzy::LicenseStatus::REACHED_MAX_NUMBER_OF_HOST:
//             return "Reached maximum number of host";

//         case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST_FOR_SKU:
//             return "Product does not exist for this SKU";

//         case Keyzy::LicenseStatus::ACTIVATION_DEACTIVATED:
//             return "Activation is deactivated";

//         case Keyzy::LicenseStatus::SUBSCRIPTION_LICENSE_EXPIRED:
//             return "Subscription license expired!";

//         case Keyzy::LicenseStatus::SUBSCRIPTION_LICENSE_NOT_STARTED:
//             return "Subscription license not started!";

//         case Keyzy::LicenseStatus::TRIAL_LICENSE_EXPIRED:
//             return "Trial license expired!";

//         case Keyzy::LicenseStatus::TRIAL_LICENSE_NOT_STARTED:
//             return "Trial license not started!";

//         case Keyzy::LicenseStatus::CANNOT_KEEP_SERIAL:
//             return "Cannot keep serial!";

//         case Keyzy::LicenseStatus::CANNOT_KEEP_LICENSE_FILE:
//             return "Cannot keep license file!";

//         case Keyzy::LicenseStatus::ACTIVATION_DELETED:
//             return "Activation deleted!";

//         case Keyzy::LicenseStatus::CLIENT_SERIAL_DOES_NOT_EXIST:
//             return "Client serial does not exist!";

//         case Keyzy::LicenseStatus::CONNECTION_ERROR:
//             return "Connection Error!";

//         case Keyzy::LicenseStatus::TOO_MANY_REQUESTS:
//             return "Too Many Requests!";

//         case Keyzy::LicenseStatus::NO_ACTIVE_SUBSCRIPTION:
//             return "No Active Subscription!";

//         case Keyzy::LicenseStatus::CURRENT_LICENSE_DOES_NOT_EXIST:
//             return "Current license does not exist!";

//         case Keyzy::LicenseStatus::UPGRADE_LICENSE_DOES_NOT_EXIST:
//             return "Upgrade license does not exist!";

//         case Keyzy::LicenseStatus::UPGRADE_LICENSE_DOES_NOT_MATCH:
//             return "Upgrade license does not match for upgrade with current license!";

//         case Keyzy::LicenseStatus::ANOTHER_TRIAL_LICENSE_ALREADY_ACTIVATED:
//             return "Another trial license has already been activated on this device!";

//         case Keyzy::LicenseStatus::SKU_NUMBER_VALIDATION:
//             return "sku_number parameter cannot be validated!";

//         case Keyzy::LicenseStatus::PRODUCT_CODE_VALIDATION:
//             return "product_code parameter cannot be validated!";

//         case Keyzy::LicenseStatus::NAME_VALIDATION:
//             return "name parameter cannot be validated!";

//         case Keyzy::LicenseStatus::EMAIL_VALIDATION:
//             return "email parameter cannot be validated!";

//         case Keyzy::LicenseStatus::NO_FREE_LICENSES:
//             return "You do not have any free licenses for this sku. Please generate new licenses for this sku!";

//         case Keyzy::LicenseStatus::NAME_OR_EMAIL_VALIDATION:
//             return "Either the name or email filed must be filled!";

//         case Keyzy::LicenseStatus::LICENSE_NOT_EXIST_NOT_ASSIGNED_DEALER_ALREADY_DEPOSITED:
//             return "The license does not exist or is not assigned to a dealer or is already deposited!";

//         case Keyzy::LicenseStatus::VALID: // Just in case
//             return "Valid";

//         default:
//             return "Unknown";
//         }
//     }
// } // namespace unlock

namespace jsFunctions
{
    inline auto hydrateScript = R"script(
(function() {
  if (typeof globalThis.__receiveHydrationData__ !== 'function')
    return false;

  globalThis.__receiveHydrationData__(%);
  return true;
})();
)script";

    inline auto dispatchStateChangeScript = R"script(
(function() {
  if (typeof globalThis.__receiveStateChange__ !== 'function')
    return false;

  globalThis.__receiveStateChange__(%);
  return true;
})();
)script";

    inline auto errorScript = R"script(
(function() {
  if (typeof globalThis.__receiveError__ !== 'function')
    return false;

  let e = new Error(%);
  e.name = @;

  globalThis.__receiveError__(e);
  return true;
})();
)script";

    inline auto logToUIScript = R"script(
(function() {
  if (typeof globalThis.__logToUI__ !== 'function')
    return false;

  let e = new Error(%);
  e.name = @;

  globalThis.__receiveError__(e);
  return true;
})();
)script";

    inline auto serverInfoScript = R"script(
(function() {
    if (typeof globalThis.__receiveServerInfo__ !== 'function')
        return false;

    globalThis.__receiveServerInfo__(%);
    return true;
    })();
)script";

    inline auto userBankScript = R"script(
(function() {
    if (typeof globalThis.__receiveUserBank__ !== 'function')
        return false;

    globalThis.__receiveUserBank__(%);
    return true;
    })();
)script";

    inline auto vfsKeysScript = R"script(
(function() {
    if (typeof globalThis.__receiveVFSKeys__ !== 'function')
        return false;

    globalThis.__receiveVFSKeys__(%);
    return true;
    })();
)script";
} // namespace jsFunctions

#endif // PLUGINPROCESSOR_H

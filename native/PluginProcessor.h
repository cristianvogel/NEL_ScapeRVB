#pragma once

#include <algorithm>  // std::sort
#include <functional> //  std::hash
#include <future>     //   std::promise and std::future
#include <cstring>    // Include this header for std::memcpy

#include <juce_audio_basics/juce_audio_basics.h>
#include <juce_audio_processors/juce_audio_processors.h>
#include <juce_audio_formats/juce_audio_formats.h>
#include <juce_dsp/juce_dsp.h>

#include <choc_AudioFileFormat.h>
#include <choc_AudioFileFormat_WAV.h>
#include <choc_AudioFileFormat_FLAC.h>
#include <choc_SampleBuffers.h>
#include <choc_SampleBufferUtilities.h>
#include <choc_AudioSampleData.h>
#include <choc_javascript.h>
#include <choc_HTTPServer.h>
#include <choc_javascript_QuickJS.h>
#include <choc_javascript_Timer.h>
#include <choc_StringUtilities.h>
#include <choc_Files.h>
#include <choc_Base64.h>
#include <choc_SmallVector.h>

#include <elem/Runtime.h>

#include <KeyzyLicenseActivator.h>
#include "WebViewEditor.h"

class WebServer;     // Forward declaration of the WebServer class
class WebViewEditor; // Forward declaration of WebViewEditor

//==============================================================================
class EffectsPluginProcessor
    : public juce::AudioProcessor,
      public juce::AudioProcessorParameter::Listener,
      private juce::AsyncUpdater
{
public:
    void createParameters(const std::vector<elem::js::Value> &parameters);

    //==============================================================================
    EffectsPluginProcessor();
    ~EffectsPluginProcessor() override;

    //==============================================================================

    juce::AudioProcessorEditor *createEditor() override;
    bool hasEditor() const override;
    WebViewEditor *editor = nullptr;

    //==============================================================================
    void prepareToPlay(double sampleRate, int samplesPerBlock) override;
    void releaseResources() override;

    bool isBusesLayoutSupported(const juce::AudioProcessor::BusesLayout &layouts) const override;

    void processBlock(juce::AudioBuffer<float> &, juce::MidiBuffer &) override;

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
    void changeProgramName(int index, const juce::String &newName) override;

    //==============================================================================
    void getStateInformation(juce::MemoryBlock &destData) override;
    void setStateInformation(const void *data, int sizeInBytes) override;

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

    /** error to UI */
    void dispatchError(std::string const &name, std::string const &message);

    /** log to UI */
    void dispatchNativeLog(std::string const &name, std::string const &message);

private:
    std::string REVERSE_BUFFER_PREFIX = "REVERSED_";
    std::string USER_FILE_URLS = "userFileURLs";
    std::string USER_REDUCED_DATA_PROPERTY = "userReducedData";
    std::string MAIN_DSP_JS_FILE = "dsp.main.js";
    std::string MAIN_PATCH_JS_FILE = "patch.main.js";
    std::string SAMPLE_RATE_PROPERTY = "sampleRate";
    std::string NATIVE_MESSAGE_FUNCTION_NAME = "__postNativeMessage__";
    std::string LOG_FUNCTION_NAME = "__log__";
    std::string WS_RESPONSE_PROPERTY = "NEL_STATE";

    // The maximum number of error messages to keep in the queue
    size_t MAX_ERROR_LOG_QUEUE_SIZE = 200;
    std::optional<std::string> loadDspEntryFileContents() const;
    std::optional<std::string> loadPatchEntryFileContents() const;

    /**
     *
     * @param expr javascript expression to evaluate in the view context
     * @return true if the view exists, false if not
     */
    bool sendJavascriptToUI(const std::string &expr) const;

    static std::string serialize(const std::string &function, const elem::js::Object &data, const juce::String &replacementChar = "%");
    static std::string serialize(const std::string &function, const choc::value::Value &data, const juce::String &replacementChar = "%");

    //==============================================================================
    std::atomic<bool> runtimeSwapRequired{false};
    std::atomic<bool> shouldInitialize{false};
    double lastKnownSampleRate = 0;
    int lastKnownBlockSize = 0;

    //===== Elementary Audio , js stores and context  ==//
    elem::js::Object state;
    std::size_t lastStateHash = -1;
    choc::javascript::Context jsContext;
    juce::AudioBuffer<float> scratchBuffer;
    std::unique_ptr<elem::Runtime<float>> runtime;
    // Use std::variant to store either juce::AudioParameterFloat* or juce::AudioParameterBool*
    std::map<std::string, std::variant<juce::AudioParameterFloat *, juce::AudioParameterBool *>> parameterMap;
    std::queue<std::string> errorLogQueue;

    //=============================================

public:
    //======== User IR related , files and buffers

    std::vector<juce::File> loadDefaultIRs();
     void inspectVFS();
    std::vector<juce::File> activeImpulseResponses;
    void addFolderOfIRsToVFS(std::vector<juce::File> &);
    std::vector<juce::File> sortOrderForDefaultIRs(std::vector<juce::File> &);

    juce::FileChooser chooser;
    void requestUserFiles(std::promise<bool> &promise);
    std::vector<juce::File> userImpulseResponses;
    std::vector<std::vector<float>> userAudioData;
    void updateStateWithBufferData();
        void updateStateWithFileURLs( const std::vector<juce::File> &paths);
   std::vector<float> reduceAudioBuffer(const juce::AudioBuffer<float>& buffer);

    juce::AudioFormatManager formatManager;
    // audiofile read using CHOC instead of juce :: DEPRECATING
    choc::audio::AudioFileFormatList formats;
    void loadAudioFromFileIntoVFS(juce::File file, int index);
    //========== Server related
    int runWebServer();
    struct ViewClientInstance : public choc::network::HTTPServer::ClientInstance
    {
        ViewClientInstance(EffectsPluginProcessor &processor);
        ~ViewClientInstance();
        choc::network::HTTPContent getHTTPContent(std::string_view path) override;
        void upgradedToWebSocket(std::string_view path) override;
        void handleWebSocketMessage(std::string_view message) override;
        int clientID = 0;
        EffectsPluginProcessor &processor; // Reference to the enclosing class
    };

    uint16_t serverPort = 0;
    uint16_t getServerPort() const { return serverPort; }

    int userCutoffChoice = 160;

private:    

    juce::dsp::StateVariableTPTFilter<float> stateVariableFilter; // For filtering the imported IRs

    std::unique_ptr<ViewClientInstance> clientInstance; // Use a smart pointer to store the client instance
    std::unique_ptr<choc::network::HTTPServer> server;  // Use a smart pointer to manage the server

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

    Keyzy::ProductData productData{"JXgnTvml", "Q4PbXdKz6riNP3eVxOrj53aBRM9QIyB6LmF1QU5b", "01afc290-0c82-11ef-8629-07468c68230b", "3qKlXJ2vnkxbQhhSgpW1D7Qi6YNIOIhz"};
    Keyzy::KeyzyLicenseActivator licenseActivator{productData};
    Keyzy::LicenseStatus licenseStatus = Keyzy::LicenseStatus::NOT_AUTHORIZED;

    //==============================================================================
    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR(EffectsPluginProcessor)
};

namespace unlock
{
    inline std::string errorStatuses(Keyzy::LicenseStatus status)
    {
        switch (status)
        {
        case Keyzy::LicenseStatus::EXPIRED:
            return "Expired";

        case Keyzy::LicenseStatus::INVALID:
            return "Invalid";

        case Keyzy::LicenseStatus::NOT_AUTHORIZED:
            return "Not authorized";

        case Keyzy::LicenseStatus::SERIAL_INVALID:
            return "Serial invalid";

        case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST:
            return "Product does not exist";

        case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST_FOR_USER:
            return "Product does not exist";

        case Keyzy::LicenseStatus::PRODUCT_NOT_ACTIVE:
            return "Product is not active";

        case Keyzy::LicenseStatus::SKU_NOT_EXIST:
            return "SKU does not exist";

        case Keyzy::LicenseStatus::SKU_NOT_ACTIVE:
            return "SKU is not active";

        case Keyzy::LicenseStatus::REACHED_MAX_NUMBER_OF_HOST:
            return "Reached maximum number of host";

        case Keyzy::LicenseStatus::PRODUCT_NOT_EXIST_FOR_SKU:
            return "Product does not exist for this SKU";

        case Keyzy::LicenseStatus::ACTIVATION_DEACTIVATED:
            return "Activation is deactivated";

        case Keyzy::LicenseStatus::SUBSCRIPTION_LICENSE_EXPIRED:
            return "Subscription license expired!";

        case Keyzy::LicenseStatus::SUBSCRIPTION_LICENSE_NOT_STARTED:
            return "Subscription license not started!";

        case Keyzy::LicenseStatus::TRIAL_LICENSE_EXPIRED:
            return "Trial license expired!";

        case Keyzy::LicenseStatus::TRIAL_LICENSE_NOT_STARTED:
            return "Trial license not started!";

        case Keyzy::LicenseStatus::CANNOT_KEEP_SERIAL:
            return "Cannot keep serial!";

        case Keyzy::LicenseStatus::CANNOT_KEEP_LICENSE_FILE:
            return "Cannot keep license file!";

        case Keyzy::LicenseStatus::ACTIVATION_DELETED:
            return "Activation deleted!";

        case Keyzy::LicenseStatus::CLIENT_SERIAL_DOES_NOT_EXIST:
            return "Client serial does not exist!";

        case Keyzy::LicenseStatus::CONNECTION_ERROR:
            return "Connection Error!";

        case Keyzy::LicenseStatus::TOO_MANY_REQUESTS:
            return "Too Many Requests!";

        case Keyzy::LicenseStatus::NO_ACTIVE_SUBSCRIPTION:
            return "No Active Subscription!";

        case Keyzy::LicenseStatus::CURRENT_LICENSE_DOES_NOT_EXIST:
            return "Current license does not exist!";

        case Keyzy::LicenseStatus::UPGRADE_LICENSE_DOES_NOT_EXIST:
            return "Upgrade license does not exist!";

        case Keyzy::LicenseStatus::UPGRADE_LICENSE_DOES_NOT_MATCH:
            return "Upgrade license does not match for upgrade with current license!";

        case Keyzy::LicenseStatus::ANOTHER_TRIAL_LICENSE_ALREADY_ACTIVATED:
            return "Another trial license has already been activated on this device!";

        case Keyzy::LicenseStatus::SKU_NUMBER_VALIDATION:
            return "sku_number parameter cannot be validated!";

        case Keyzy::LicenseStatus::PRODUCT_CODE_VALIDATION:
            return "product_code parameter cannot be validated!";

        case Keyzy::LicenseStatus::NAME_VALIDATION:
            return "name parameter cannot be validated!";

        case Keyzy::LicenseStatus::EMAIL_VALIDATION:
            return "email parameter cannot be validated!";

        case Keyzy::LicenseStatus::NO_FREE_LICENSES:
            return "You do not have any free licenses for this sku. Please generate new licenses for this sku!";

        case Keyzy::LicenseStatus::NAME_OR_EMAIL_VALIDATION:
            return "Either the name or email filed must be filled!";

        case Keyzy::LicenseStatus::LICENSE_NOT_EXIST_NOT_ASSIGNED_DEALER_ALREADY_DEPOSITED:
            return "The license does not exist or is not assigned to a dealer or is already deposited!";

        case Keyzy::LicenseStatus::VALID: // Just in case
            return "Valid";

        default:
            return "Unknown";
        }
    }
}

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

    inline auto dispatchScript = R"script(
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

    inline auto serverInfoScript = R"script(
(function() {
    if (typeof globalThis.__receiveServerInfo__ !== 'function')
        return false;
    
    globalThis.__receiveServerInfo__(%);
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

}

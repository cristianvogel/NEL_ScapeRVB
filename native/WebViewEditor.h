#pragma once

#include <juce_audio_processors/juce_audio_processors.h>
#include <juce_gui_extra/juce_gui_extra.h>

#include <choc_WebView.h>


//==============================================================================
// A simple juce::AudioProcessorEditor that holds a choc::WebView and sets the
// WebView instance to cover the entire region of the editor.
class WebViewEditor : public juce::AudioProcessorEditor
{
public:
    //==============================================================================
    WebViewEditor(juce::AudioProcessor *proc, juce::File const &assetDirectory, int width, int height);
    ~WebViewEditor() override;
   //==============================================================================
    choc::ui::WebView* getWebViewPtr();
    //==============================================================================
    void paint(juce::Graphics &g) override;
    void resized() override;


    //==============================================================================
    // Keyzy
    std::function<void(choc::value::Value &)> handleUnlockEvent = [](choc::value::Value &) {};

    //==============================================================================

    std::function<void(const std::string &, float)> setParameterValue = [](const std::string &, float) {};
    std::function<void()> reload = []() {};
    std::function<void()> ready = []() {};
    std::function<void()> closeServer = []() {};
    std::function<void()> pruneVFS = []() {};

    void executeJavascript(const std::string &script) const;

private:
    std::string POST_NATIVE_MESSAGE = "__postNativeMessage__";
    std::string READY_EVENT = "ready";
    std::string RELOAD_EVENT = "reload";
    std::string SET_PARAMETER_VALUE = "setParameterValue";
    std::string CLOSE_SERVER = "closeServer";
    std::string UNLOCK_EVENT = "unlock";
    std::string HOST_INFO = "hostInfo";
    std::string SERVER_PORT = "serverInfo";
    std::string PRUNE_VFS = "pruneVFS";

    choc::value::Value handleSetParameterValueEvent(const choc::value::ValueView &e) const;

    std::unique_ptr<choc::ui::WebView> webView;

#if JUCE_MAC
    juce::NSViewComponent viewContainer;
#elif JUCE_WINDOWS
    juce::HWNDComponent viewContainer;
#else
#error "We only support MacOS and Windows here yet."
#endif
};

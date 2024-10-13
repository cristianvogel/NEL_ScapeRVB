#ifndef VIEWCLIENTINSTANCE_H
#define VIEWCLIENTINSTANCE_H

#include <choc_HTTPServer.h>
#include "elem/JSON.h"

// Forward declaration of EffectsPluginProcessor
class EffectsPluginProcessor;


class ViewClientInstance : public choc::network::HTTPServer::ClientInstance {
public:
    ViewClientInstance(EffectsPluginProcessor &processor);
    ~ViewClientInstance();

    choc::network::HTTPContent getHTTPContent(std::string_view path);
    void upgradedToWebSocket(std::string_view path);
    void handleWebSocketMessage(std::string_view message);
    void wrapPeaksForView(elem::js::Object &wrappedPeaks, std::string &peaksKey);

private:
    EffectsPluginProcessor &processor;
    int clientID;
};

#endif // VIEWCLIENTINSTANCE_H
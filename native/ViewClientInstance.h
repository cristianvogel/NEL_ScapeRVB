#ifndef VIEWCLIENTINSTANCE_H
#define VIEWCLIENTINSTANCE_H

#include <choc_HTTPServer.h>

// Forward declaration of EffectsPluginProcessor
class EffectsPluginProcessor;

class ViewClientInstance : public choc::network::HTTPServer::ClientInstance
{
public:
    ViewClientInstance(EffectsPluginProcessor &processor);
    ~ViewClientInstance();

    void stop(); // Custom stop method

    choc::network::HTTPContent getHTTPContent(std::string_view path);
    void upgradedToWebSocket(std::string_view path);
    void handleWebSocketMessage(std::string_view message);
    void userFileUploadHandler(const int& hpfValue, int& retFlag);

private:
    int clientID;
    EffectsPluginProcessor &processor;
    std::atomic<bool> running = true; // Flag to indicate if the instance is running

public:
    enum class ErrorType
    {
        UNKNOWN_ERROR,
        OK,
        FILESIZE_EXCEEDED,
        FILETYPE_NOT_SUPPORTED,
        FILE_NOT_SELECTED,
        FILE_NOT_FOUND,
        FILE_NOT_READABLE,
    };    
    int uploadStatus = static_cast<int>(ErrorType::UNKNOWN_ERROR);
};

// Type alias for casting ErrorType to int
using ScapeError = ViewClientInstance::ErrorType;

inline std::string errorStatuses( int status )
{
switch (status)
{
    case static_cast<int>(ScapeError::FILESIZE_EXCEEDED):
        return "Each file cannot exceed 10MB";
    case static_cast<int>(ScapeError::FILETYPE_NOT_SUPPORTED):
        return "Only WAV and AIFF files are supported";
    case static_cast<int>(ScapeError::FILE_NOT_SELECTED):
        return "No file selected";
    case static_cast<int>(ScapeError::FILE_NOT_FOUND):
        return "File not found";
    case static_cast<int>(ScapeError::FILE_NOT_READABLE):
        return "File not readable";
    case static_cast<int>(ScapeError::OK):
        return "OK";
    default:
        return "Nothing was imported.";
}
}

#endif // VIEWCLIENTINSTANCE_H
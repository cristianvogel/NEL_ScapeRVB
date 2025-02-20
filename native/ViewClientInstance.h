#pragma once

#ifndef VIEWCLIENTINSTANCE_H
#define VIEWCLIENTINSTANCE_H

#include <choc_HTTPServer.h>
#include "SlotName.h"


// Forward declaration of EffectsPluginProcessor
class Processor;

class ViewClientInstance : public choc::network::HTTPServer::ClientInstance
{
public:
    explicit ViewClientInstance(Processor &processor);
    ~ViewClientInstance() override;

    void stop(); // Custom stop method

    choc::network::HTTPContent getHTTPContent(std::string_view path) override;
    void upgradedToWebSocket(std::string_view path) override;
    void handleWebSocketMessage(std::string_view message) override;
    void userFileUploadHandler(const int &hpfValue) const;



private:
    int clientID;
    int retFlag = 0;
    Processor &processor;
    std::atomic<bool> running = true; // Flag to indicate if the instance is running

public:
    enum class ErrorType
    {
        UNKNOWN_ERROR,
        OK,
        FILESIZE_EXCEEDED,
        FILETYPE_NOT_SUPPORTED,
        NO_FILES_SELECTED,
        FILE_NOT_FOUND,
        FILE_NOT_READABLE,
        FILE_NOT_STEREO,
        DO_NOT_OVERWRITE_DEFAULTS
    };
    int uploadStatus = static_cast<int>(ErrorType::UNKNOWN_ERROR);
};

// Type alias for casting ErrorType to int
using ScapeError = ViewClientInstance::ErrorType;

inline std::string errorStatuses(int status)
{
    switch (status)
    {
    case static_cast<int>(ScapeError::FILESIZE_EXCEEDED):
        return "File size limit is 5MB";
    case static_cast<int>(ScapeError::FILETYPE_NOT_SUPPORTED):
        return "Only WAV and AIFF files are supported";
    case static_cast<int>(ScapeError::NO_FILES_SELECTED):
        return "No files were imported";
    case static_cast<int>(ScapeError::FILE_NOT_FOUND):
        return "File not found";
    case static_cast<int>(ScapeError::FILE_NOT_READABLE):
        return "File not readable";
    case static_cast<int>(ScapeError::FILE_NOT_STEREO):
        return "File must be stereo";
    case static_cast<int>(ScapeError::DO_NOT_OVERWRITE_DEFAULTS):
        return "File cannot be called TEMPLE, SURFACE, DEEPNESS or LIGHT";
    case static_cast<int>(ScapeError::OK):
        return "OK";
    default:
        return "Nothing was imported.";
    }
}

#endif // VIEWCLIENTINSTANCE_H
//
// Created by Cristian Vogel on 21/01/2025.

#include "AssetHelpers.h"
#include <PluginProcessor.h>
#include <elem/JSON.h>


namespace assetHelpers
{
    // Function to convert elem::js::Object to std::map<SlotName, Asset>
    std::map<SlotName, Asset> convert_to_asset_map(const elem::js::Object& assetStateObject) 
    {
        std::map<SlotName, Asset> assetMap;
        // Ensure assetStateObject contains the expected key
        if (!assetStateObject.contains(PERSISTED_ASSET_MAP))
        {
            std::cerr << "PERSISTED_ASSETMAP key not found in assetStateObject" << std::endl;
            return assetMap;
        }

        const auto& wrapper = assetStateObject.at(PERSISTED_ASSET_MAP);

        // Ensure inner wrapper is an object too
        if (!wrapper.isObject())
        {
            std::cerr << "PERSISTED_ASSETMAP is not an object" << std::endl;
            return assetMap;
        }

        const auto& wrapperObject = wrapper.getObject();
        for (auto& entry : wrapperObject)
        {
            const std::string& stored_target_slot = entry.first;
            const std::string& stored_serialised_asset = entry.second.toString();
            SlotName slotName = slotname_from_string(stored_target_slot);
            elem::js::Object asset = elem::js::parseJSON(stored_serialised_asset).getObject();
            assetMap.insert_or_assign(slotName, convert_to_asset(asset));
        }
        return assetMap;
    }

    Asset convert_to_asset(const elem::js::Value& incoming)
    {
        using EJV = elem::js::Value;
        const auto& unwrapped_object = incoming.getObject();
        // Ensure wrapper is valid
        if (unwrapped_object.empty())
        {
            std::cerr << "Wrapped Asset was empty" << std::endl;
            return {};
        }
        // mutable container of Asset type
        Asset assetOut;

        std::map<std::string, std::function<void(EJV&, Asset&)>> propertySetters;

        //=== File hooks
        propertySetters["userStereoFile"] = [&](EJV& value, Asset& asset)
        {
            if (value.isString())
                asset.set(Asset::Props::userStereoFile, juce::File(value.toString()));
        };
        propertySetters["defaultStereoFile"] = [&](EJV& value, Asset& asset)
        {
            if (value.isString())
                 asset.set(Asset::Props::defaultStereoFile, juce::File(value.toString()));
        };
        //=== Filenames
        propertySetters["filenameForView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isString())
                asset.set(Asset::Props::filenameForView, value.toString());
        };
        propertySetters["defaultFilenameForView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isString())
             asset.set(Asset::Props::defaultFilenameForView, value.toString());
        };
        propertySetters["userFilenameForView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isString())
                asset.set(Asset::Props::userFilenameForView, value.toString());
        };
        //=== String Vector
        propertySetters["vfs_keys"] = [&](EJV& value, Asset& asset)
        {
            if (value.isArray())
                asset.set(Asset::Props::vfs_keys, value.toStringVector());
        };
        //=== Float32 Vector
        propertySetters["defaultPeaksForView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isFloat32Array())
                asset.set(Asset::Props::defaultPeaksForView, value.getFloat32Array());
        };
        propertySetters["userPeaksForView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isFloat32Array())
                asset.set(Asset::Props::userPeaksForView, value.getFloat32Array());
        };
        propertySetters["currentPeakDataInView"] = [&](EJV& value, Asset& asset)
        {
            if (value.isFloat32Array())
                asset.set(Asset::Props::currentPeakDataInView, value.getFloat32Array());
        };

        //=== int or valid default hz
        propertySetters["cutOffChoice"] = [&](EJV& value, Asset& asset)
        {
            const auto cutoff = value.getNumber();
            if (cutoff)
            {
                asset.set(Asset::Props::cutOffChoice, HZ_OPTIONS[0]);
                for (const int hz : HZ_OPTIONS)
                {
                    if (cutoff == hz)
                    {
                        asset.set(Asset::Props::cutOffChoice, cutoff);
                    }
                }
            }
        };


        for (const auto& [prop, nonMutVal] : unwrapped_object)
        {
            elem::js::Value mutVal = nonMutVal;
            if (propertySetters.contains(prop))
                propertySetters[prop](mutVal, assetOut);
            else
                std::cerr << "👻 Could not unwrap persisted asset! " << std::endl;
        }
        return assetOut;
    }

    // ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
    // Function to convert std::map<SlotName, Asset> to elem::js::Value
    elem::js::Value serialise_assets_map_entries(std::map<SlotName, Asset>& map)
    {
        elem::js::Object obj;
        for (auto& [target_slot, linked_asset] : map)
        {
            obj[slotname_to_string(target_slot)] = serialise_asset(linked_asset);
        }
        return elem::js::Value(obj);
    }

    elem::js::String serialise_asset(const Asset& asset)
    {
        std::string serialised_asset = asset.wrap_asset();
        return elem::js::String(serialised_asset);
    }
} // end ASSETHELPERS_H
//
// Created by Cristian Vogel on 21/01/2025.
//


#ifndef ASSETHELPERS_H
#define ASSETHELPERS_H

// Standard Library Headers
#include <string>
#include <map>

// Third-Party Library Headers
#include "elem/Value.h"

// Local Headers
#include "SlotName.h"
#include "Asset.h"

namespace assetHelpers
{
    std::map<SlotName, Asset> convert_to_asset_map(const elem::js::Object& assetStateObject) ;
    Asset convert_to_asset(const elem::js::Value& wrapper) ;
    elem::js::Value serialise_assets_map_entries(std::map<SlotName, Asset>& map);
    elem::js::String serialise_asset(const Asset& asset);


}
#endif //ASSETHELPERS_H

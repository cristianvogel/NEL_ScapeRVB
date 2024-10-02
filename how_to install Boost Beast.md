
cristianvogel: i need to include boost/beast and boost/asio

GitHub Copilot: To include Boost.Beast and Boost.Asio in your CMake project, you need to find the Boost libraries and link them to your target. Here's how you can modify your 

CMakeLists.txt

 to include these libraries:

1. Find the Boost libraries.
2. Link the Boost libraries to your target.

Here's the updated 

CMakeLists.txt

:

```cmake
# Find Boost libraries
find_package(Boost REQUIRED COMPONENTS system thread)

# Link Boost libraries
target_link_libraries(${TARGET_NAME} PRIVATE Boost::system Boost::thread)

target_link_libraries(${TARGET_NAME} PRIVATE ${LIB_DIR}/Lib/KeyzyClient.lib)

elseif(APPLE)
  if(IOS)
    set(LIB_DIR ${CMAKE_CURRENT_SOURCE_DIR}/KeyzyClientLibrary/XcodeiOS)
  else()
    # Choose the correct library based on your target architectures
    set(LIB_DIR ${CMAKE_CURRENT_SOURCE_DIR}/KeyzyClientLibrary/XcodeAppleSiliconIntel64)
  endif()

  find_library(KEYZY_CLIENT_LIB KeyzyClient PATHS ${LIB_DIR}/Lib)

  if(NOT KEYZY_CLIENT_LIB)
    message(FATAL_ERROR "KeyzyClient library not found")
  endif()

  target_link_libraries(${TARGET_NAME} PRIVATE ${KEYZY_CLIENT_LIB})
endif()

target_include_directories(${TARGET_NAME} PRIVATE
  $<BUILD_INTERFACE:${LIB_DIR}/Include>
  $<BUILD_INTERFACE:${Boost_INCLUDE_DIRS}>)

# Copy static assets post build
if(NOT ELEM_DEV_LOCALHOST)
  get_target_property(ACTIVE_TARGETS ${TARGET_NAME} JUCE_ACTIVE_PLUGIN_TARGETS)

  foreach(ACTIVE_TARGET IN LISTS ACTIVE_TARGETS)
    message(STATUS "Adding resource copy step from ${ASSETS_DIR} for ${ACTIVE_TARGET}")

    get_target_property(ARTIFACT_FILE ${ACTIVE_TARGET} JUCE_PLUGIN_ARTEFACT_FILE)
    set(RESOURCE_DIR "${ARTIFACT_FILE}/Contents/Resources/")

    add_custom_command(TARGET ${ACTIVE_TARGET} POST_BUILD
```

This modification includes the Boost libraries and links them to your target. Make sure you have Boost installed on your system and CMake can find it. If Boost is installed in a non-standard location, you might need to specify the path to Boost using `BOOST_ROOT` or `BOOST_INCLUDEDIR` and `BOOST_LIBRARYDIR` variables.

cristianvogel: how do i install Boost/Beast and ASIO

GitHub Copilot: To install Boost.Beast and Boost.Asio, you need to install the Boost library, as both Beast and Asio are part of the Boost library collection. Here are the steps to install Boost on different platforms:

### macOS
You can use Homebrew to install Boost:

```sh
brew install boost
```

### Windows
You can download the Boost library from the official Boost website and follow the installation instructions:

1. Go to the [Boost download page](https://www.boost.org/users/download/).
2. Download the latest version of Boost.
3. Extract the downloaded archive to a directory of your choice.
4. Follow the instructions in the `README` or `INSTALL` files to build and install Boost.

### Linux
You can use your package manager to install Boost. For example, on Ubuntu:

```sh
sudo apt-get update
sudo apt-get install libboost-all-dev
```

### Using CMake to Find Boost
After installing Boost, you can use CMake to find and link the Boost libraries in your project. Here is an example of how to modify your 

CMakeLists.txt

 file to include Boost.Beast and Boost.Asio:

```cmake
# Find Boost libraries
find_package(Boost REQUIRED COMPONENTS system thread)

# Link Boost libraries
target_link_libraries(${TARGET_NAME} PRIVATE Boost::system Boost::thread)

# Include Boost directories
target_include_directories(${TARGET_NAME} PRIVATE
  $<BUILD_INTERFACE:${LIB_DIR}/Include>
  $<BUILD_INTERFACE:${Boost_INCLUDE_DIRS}>)

# Copy static assets post build
if(NOT ELEM_DEV_LOCALHOST)
  get_target_property(ACTIVE_TARGETS ${TARGET_NAME} JUCE_ACTIVE_PLUGIN_TARGETS)

  foreach(ACTIVE_TARGET IN LISTS ACTIVE_TARGETS)
    message(STATUS "Adding resource copy step from ${ASSETS_DIR} for ${ACTIVE_TARGET}")

    get_target_property(ARTIFACT_FILE ${ACTIVE_TARGET} JUCE_PLUGIN_ARTEFACT_FILE)
    set(RESOURCE_DIR "${ARTIFACT_FILE}/Contents/Resources/")

    add_custom_command(TARGET ${ACTIVE_TARGET} POST_BUILD
      COMMAND ${CMAKE_COMMAND} -E rm -rf "${RESOURCE_DIR}/dist"
      COMMAND ${CMAKE_COMMAND} -E make_directory "${RESOURCE_DIR}/dist"
      COMMAND ${CMAKE_COMMAND} -E copy_directory "${ASSETS_DIR}" "${RESOURCE_DIR}/dist"
    )
  endforeach()
endif()
```

### Explanation
1. **Find Boost Libraries**:
   - The `find_package(Boost REQUIRED COMPONENTS system thread)` command searches for the Boost libraries, specifically the [`system`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fcristianvogel%2FProgramming%2FProgrammingSubFolder%2FNEL_ScapeRVB%2Fnative%2FCMakeLists.txt%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A83%2C%22character%22%3A39%7D%7D%5D%2C%2218642f42-ad2f-4cbf-b47e-5fcc0deff208%22%5D "Go to definition") and [`thread`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fcristianvogel%2FProgramming%2FProgrammingSubFolder%2FNEL_ScapeRVB%2Fnative%2FCMakeLists.txt%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A83%2C%22character%22%3A46%7D%7D%5D%2C%2218642f42-ad2f-4cbf-b47e-5fcc0deff208%22%5D "Go to definition") components.

2. **Link Boost Libraries**:
   - The `target_link_libraries(${TARGET_NAME} PRIVATE Boost::system Boost::thread)` command links the Boost system and thread libraries to your target.

3. **Include Boost Directories**:
   - The `target_include_directories(${TARGET_NAME} PRIVATE $<BUILD_INTERFACE:${Boost_INCLUDE_DIRS}>)` command includes the Boost header directories in your target.

By following these steps, you can install Boost.Beast and Boost.Asio and configure your CMake project to use them.
# Bash commands
- npm run build: Build the project
- npm run sync-version: sync version numbers across the code base

# Code style
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')

# Workflow
- Be sure to typecheck when you’re done making a series of code changes
- Prefer running single tests, and not the whole test suite, for performance
- add brief console logging using DBG for C++ 

# Libraries
- Use local versions of juce, choc and elementary libraries, found in /native/

# Project specific
- NEL_scape_space is a hybrid reverb VST3 plugin, based on convolution reverb and FDN reverb, it has a canvas based UI made with Cables.gl ( an open source javascript 3D programming environment ) 
- ignore Cables.gl generated files
- native code interacts with front end via websockets and choc webserver
- the user can upload new impulse response files, through juce
- the Elementary native audio engine has it's own Virtual File System which is immutable
- Elementary error codes and types can be found in elementary/runtime/Types.h and Runtime.h

# About Elementary Runtime
 The Runtime is the primary interface for embedding the Elementary engine within
 your project, independent of the JavaScript engine.

 A Runtime instance manages the processing graph, coordinates mutations against
 that graph, and runs the realtime processing loop. Once the Runtime instance is
 in place, it can receive instructions from the JavaScript frontend, wherever that
 frontend is running.

 Users may also implement custom graph nodes by extending the GraphNode
 interface and then registering with the Runtime via `registerNodeType`.

# Custom ConvolverNode Implementation
- Custom ConvolverNode registered as "convolver" (not "convolve" like standard Elementary)
- Located in native/ConvolverNode.h 
- Supports properties: path, process, scale, offset, headSize, tailSize
- Does NOT support blockSizes property (causes InvalidPropertyType errors)
- Uses TwoStageFFTConvolver with configurable head/tail sizes
- Includes ducking mechanism for smooth IR swapping

# Troubleshooting Elementary Errors
- ReturnCode 5 (InvalidPropertyType): Wrong data type or unsupported property name
- ReturnCode 6 (InvalidPropertyValue): Correct type but invalid value (e.g., VFS path not found)
- Check property names match your custom node implementations
- Validate VFS paths exist before referencing in convolver nodes
- Use sanitizeConvolverProps() for data validation before sending to Elementary

# Common Issues & Solutions (Dec 2024)
- **blockSizes property**: ConvolverNode expects headSize/tailSize, not blockSizes array
- **NaN values in SRVB**: Use sanitizeSrvbProps() to catch NaN before Elementary
- **Null pointer access**: Use optional chaining (?.structure) when accessing memoized state
- **Convolver silence**: Check vectorData array - slots with 0 values will be muted
- **Bypass logic**: 1=bypassed, 0=active - check initial state from host
- **Type validation**: Add debug logging to identify specific property causing errors
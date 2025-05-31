## The `sync-version` script is a version synchronization utility

---
## Purpose
The script uses a **single source of truth** approach for version management. It reads the version number from a specific UI JSON file and propagates that version to all other relevant build files.

## How it works

1. **Source of Truth**: It looks for a file matching the pattern `public/scape_space_ui/js/scape_space_v*.json` and extracts the version number from the filename (e.g., `scape_space_v1.2.3.json` → version `1.2.3`)

2. **Validation**: It ensures exactly one such file exists (fails if none found or multiple found)

3. **Version Propagation**: It updates the version number in multiple files

## Files it touches

The script updates the following files with the new version number:

1. **`native/CMakeLists.txt`**:
    - Updates the `project(NEL_scape_space VERSION x.x.x)` line
    - Updates the `set(BUILD_VERSION "vx.x.x")` line

2. **`src/stores/constants.ts`**:
    - Updates the `BUILD_VERSION: string = "vx.x.x"` declaration

3. **`package.json`**:
    - Updates the `version` field in the root package.json

## Benefits

- **Consistency**: Ensures all files reference the same version
- **Single Source**: The UI JSON filename serves as the authoritative version reference
- **Automation**: Eliminates manual updates across multiple files
- **Error Prevention**: Validates that exactly one version source exists

This approach is particularly useful in projects where version numbers need to be consistent across different build systems (CMake for native code, npm for JavaScript, and TypeScript constants for runtime use).
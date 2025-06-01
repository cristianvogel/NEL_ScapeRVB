
import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { $ } from 'zx';

let rootDir =  path.resolve(__dirname, '..');
let buildDir = path.join(rootDir, 'native', 'build', 'scripted');

// Check if we need to do any cleaning at all
const forceClean = argv.clean;

if (await fs.pathExists(buildDir)) {
    if (forceClean) {
        console.log(`Force clean requested, removing build directory`);
        await fs.remove(buildDir);
    } else {
        console.log(`Using incremental build - CMake will handle dependency tracking`);
    }
} else {
    console.log(`Build directory does not exist: ${buildDir}`);
}
await fs.ensureDir(buildDir);

cd(buildDir);

let buildType = argv.dev ? 'Debug' : 'RelWithDebInfo';
let devFlag = argv.dev ? '-DELEM_DEV_LOCALHOST=1' : '';

if (os.platform() === 'darwin') {

    // macOS specific code
    await $`cmake -G Ninja -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ -DCMAKE_MAKE_PROGRAM=/usr/local/bin/ninja  -DCMAKE_OSX_DEPLOYMENT_TARGET=13 -DCMAKE_OSX_ARCHITECTURES="x86_64" ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;

} else if (os.platform() === 'win32') {     //nodejs os returns win32 even on 64-bit Windows.
    await $`cmake -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;
}
#!/usr/bin/env zx
// noinspection DuplicatedCode

import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { $ } from 'zx';

let rootDir =  path.resolve(__dirname, '..');
let buildDir = path.join(rootDir, 'native', 'build', 'scripted');

//echo(`Root directory: ${rootDir}`);
//echo(`Build directory: ${buildDir}`);

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


    // Uncomment the following lines if you need to build for x86_64 as well
    //  await $`cmake  -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/  -DCMAKE_OSX_DEPLOYMENT_TARGET=12 -DCMAKE_OSX_ARCHITECTURES="x86_64" ${devFlag} ../..`;
    //  await $`cmake --build . --config ${buildType} -j 4`;

    // macOS specific code // -G Xcode for Xcode project
    await $`cmake -G Ninja -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ -DCMAKE_MAKE_PROGRAM=/Applications/CLion.app/Contents/bin/ninja/mac/aarch64/ninja  -DCMAKE_OSX_DEPLOYMENT_TARGET=13 -DCMAKE_OSX_ARCHITECTURES="arm64" ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;

} else if (os.platform() === 'win32') {     //nodejs os returns win32 even on 64-bit Windows.
    await $`cmake -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;
}
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

// Clean the build directory before we build, preserving JUCE builds
if (await fs.pathExists(buildDir)) {
    console.log(`Cleaning build directory: ${buildDir}`);
    const items = await fs.readdir(buildDir);
    console.log(`Found items: ${items.join(', ')}`);
    for (const item of items) {
        if (item === 'JUCE') {
            console.log(`Preserving: ${item}`);
        } else if (item === 'CMakeFiles') {
            // Preserve JUCE modules in CMakeFiles but remove other plugin files
            const cmakeFilesPath = path.join(buildDir, item);
            const pluginDirPath = path.join(cmakeFilesPath, 'NEL_scape_space.dir');
            if (await fs.pathExists(pluginDirPath)) {
                const pluginItems = await fs.readdir(pluginDirPath);
                for (const pluginItem of pluginItems) {
                    if (pluginItem !== 'JUCE') {
                        console.log(`Removing plugin file: ${pluginItem}`);
                        await fs.remove(path.join(pluginDirPath, pluginItem));
                    } else {
                        console.log(`Preserving compiled JUCE modules: ${pluginItem}`);
                    }
                }
            }
        } else {
            console.log(`Removing: ${item}`);
            await fs.remove(path.join(buildDir, item));
        }
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
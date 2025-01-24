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
// await fs.remove(buildDir);
// await fs.ensureDir(buildDir);

// Clean the build directory before we build
let artefactsDir = path.join(buildDir, 'NEL_scape_space_artefacts');
let cmakeFilesDir = path.join(buildDir, 'CMakeFiles');

await fs.remove(artefactsDir);
await fs.remove(cmakeFilesDir);


// remove existing artefacts from the VST3 folder before building
let vst3Dir = path.join(os.homedir(), 'Library', 'Audio', 'Plug-Ins', 'VST3');
let filesToDelete = await fs.readdir(vst3Dir);
filesToDelete = filesToDelete.filter(f => f.startsWith('NEL_'));
filesToDelete.forEach(f => fs.remove(path.join(vst3Dir, f)));


cd(buildDir);

let buildType = argv.dev ? 'Debug' : 'RelWithDebInfo';
let devFlag = argv.dev ? '-DELEM_DEV_LOCALHOST=1' : '';

if (os.platform() === 'darwin') {


    // Uncomment the following lines if you need to build for x86_64 as well
    await $`cmake  -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/  -DCMAKE_OSX_DEPLOYMENT_TARGET=12 -DCMAKE_OSX_ARCHITECTURES="x86_64" ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;

    // macOS specific code // -G Xcode for Xcode project
    await $`cmake -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/  -DCMAKE_OSX_DEPLOYMENT_TARGET=12 -DCMAKE_OSX_ARCHITECTURES="arm64" ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;

} else if (os.platform() === 'win32') {     //nodejs os returns win32 even on 64-bit Windows.
    await $`cmake -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;
}
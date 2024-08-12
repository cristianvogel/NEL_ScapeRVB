#!/usr/bin/env zx
import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { $ } from 'zx';

let rootDir = await path.resolve(__dirname, '..');
let buildDir = await path.join(rootDir, 'native', 'build', 'scripted');

echo(`Root directory: ${rootDir}`);
echo(`Build directory: ${buildDir}`);

// Clean the build directory before we build
await fs.remove(buildDir);
await fs.ensureDir(buildDir);

cd(buildDir);

let buildType = argv.dev ? 'Debug' : 'Release';
let devFlag = argv.dev ? '-DELEM_DEV_LOCALHOST=1' : '';

if (os.platform() === 'darwin') {
    // macOS specific code
    await $`cmake -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ -DCMAKE_TOOLCHAIN_FILE=${rootDir}/toolchain.cmake -DCMAKE_OSX_DEPLOYMENT_TARGET=10.15 -DCMAKE_OSX_ARCHITECTURES="arm64" ${devFlag} ../..`;
    await $`cmake --build . --config ${buildType} -j 4`;

    // Uncomment the following lines if you need to build for x86_64 as well
    // await $`cmake  -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ -DCMAKE_TOOLCHAIN_FILE=${rootDir}/toolchain.cmake -DCMAKE_OSX_DEPLOYMENT_TARGET=10.13 -DCMAKE_OSX_ARCHITECTURES="x86_64" ${devFlag} ../..`;
    // await $`cmake --build . --config ${buildType} -j 4`;

} else if (os.platform() === 'win32') {
    // Windows specific code
    // Add your Windows-specific build commands here
}
#!/usr/bin/env zx
// noinspection DuplicatedCode

/*
 * NEL Scape Space - Optimized Native Build Script
 * 
 * Build Modes:
 * - Production: npm run build-native (clean build, full optimization)
 * - Development: npm run dev-native --dev (incremental, debug mode)
 * - Fast Dev: npm run dev-native:fast --incremental (incremental only)
 * - Clean: npm run build-native:clean --clean (force clean build)
 * 
 * Optimizations:
 * - Incremental builds preserve CMake cache and object files
 * - Smart cleaning only removes artifacts that need refresh
 * - Parallel compilation with optimal job count
 * - Build timing and progress reporting
 * - Ninja generator for faster builds
 */

import os from 'os';
import path from 'path';
import fs from 'fs-extra';

import { $ } from 'zx';

let rootDir =  path.resolve(__dirname, '..');
let buildDir = path.join(rootDir, 'native', 'build', 'scripted');

// Determine build mode
let isDevBuild = argv.dev || argv.incremental;
let isClean = argv.clean;

console.log(`Build mode: ${isDevBuild ? 'Development (incremental)' : 'Production (clean)'}`);

// Smart cleaning strategy
if (isClean || (!isDevBuild && !await fs.pathExists(buildDir))) {
    console.log('Performing clean build...');
    // Full clean for production builds or when explicitly requested
    if (await fs.pathExists(buildDir)) {
        const items = await fs.readdir(buildDir);
        for (const item of items) {
            if (item !== 'juce') {
                await fs.remove(path.join(buildDir, item));
            }
        }
    } else {
        await fs.ensureDir(buildDir);
    }
} else if (isDevBuild) {
    console.log('Performing incremental build...');
    // For dev builds, only clean specific directories that need refresh
    await fs.ensureDir(buildDir);
    
    // Only remove artifacts directory for incremental builds to force plugin refresh
    let artefactsDir = path.join(buildDir, 'NEL_scape_space_artefacts');
    if (await fs.pathExists(artefactsDir)) {
        console.log('Cleaning artifacts directory for plugin refresh...');
        await fs.remove(artefactsDir);
    }
} else {
    // Ensure build directory exists for production builds
    await fs.ensureDir(buildDir);
}

// Remove existing artifacts from VST3 folder (always needed for fresh plugin install)
let vst3Dir = path.join(os.homedir(), 'Library', 'Audio', 'Plug-Ins', 'VST3');
if (await fs.pathExists(vst3Dir)) {
    let filesToDelete = await fs.readdir(vst3Dir);
    filesToDelete = filesToDelete.filter(f => f.startsWith('NEL_scape'));
    console.log(`Removing ${filesToDelete.length} existing plugin files from VST3 directory...`);
    for (const file of filesToDelete) {
        await fs.remove(path.join(vst3Dir, file));
    }
}

cd(buildDir);

let buildType = argv.dev ? 'Debug' : 'RelWithDebInfo';
let devFlag = argv.dev ? '-DELEM_DEV_LOCALHOST=1' : '';

// Determine optimal parallel jobs based on system and build type
let maxJobs = os.cpus().length;
let parallelJobs = isDevBuild ? Math.min(maxJobs, 8) : Math.min(maxJobs, 16);

console.log(`Using ${parallelJobs} parallel jobs for compilation`);

if (os.platform() === 'darwin') {
    // Check if CMakeCache exists to determine if we need to reconfigure
    let cmakeCacheExists = await fs.pathExists(path.join(buildDir, 'CMakeCache.txt'));
    
    if (!cmakeCacheExists || isClean || !isDevBuild) {
        console.log('Configuring CMake...');
        await $`cmake -G Ninja -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ -DCMAKE_OSX_DEPLOYMENT_TARGET=12 -DCMAKE_OSX_ARCHITECTURES="x86_64" ${devFlag} ../..`;
    } else {
        console.log('Skipping CMake configuration (using existing cache)');
    }
    
    console.log('Building...');
    let buildStartTime = Date.now();
    await $`cmake --build . --config ${buildType} -j ${parallelJobs}`;
    let buildTime = ((Date.now() - buildStartTime) / 1000).toFixed(2);
    console.log(`Build completed in ${buildTime}s`);

} else if (os.platform() === 'win32') {     //nodejs os returns win32 even on 64-bit Windows.
    let cmakeCacheExists = await fs.pathExists(path.join(buildDir, 'CMakeCache.txt'));
    
    if (!cmakeCacheExists || isClean || !isDevBuild) {
        console.log('Configuring CMake...');
        await $`cmake -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=${buildType} -DCMAKE_INSTALL_PREFIX=./out/ ${devFlag} ../..`;
    } else {
        console.log('Skipping CMake configuration (using existing cache)');
    }
    
    console.log('Building...');
    let buildStartTime = Date.now();
    await $`cmake --build . --config ${buildType} -j ${parallelJobs}`;
    let buildTime = ((Date.now() - buildStartTime) / 1000).toFixed(2);
    console.log(`Build completed in ${buildTime}s`);
}
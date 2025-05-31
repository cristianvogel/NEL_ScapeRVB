#!/usr/bin/env zx
import { $ } from 'zx';
import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

// Read version from UI JSON filename (single source of truth)
const uiJsonPattern = path.join(process.cwd(), 'public/scape_space_ui/js/scape_space_v*.json');
const uiJsonFiles = await glob(uiJsonPattern);

if (uiJsonFiles.length === 0) {
    console.error('❌ No scape_space_v*.json file found in public/scape_space_ui/js/');
    process.exit(1);
}

if (uiJsonFiles.length > 1) {
    console.error('❌ Multiple scape_space_v*.json files found. Please keep only one:');
    uiJsonFiles.forEach(file => console.error(`  - ${file}`));
    process.exit(1);
}

// Extract version from filename
const uiJsonFile = uiJsonFiles[0];
const filename = path.basename(uiJsonFile);
const versionMatch = filename.match(/scape_space_v([0-9.]+)\.json$/);

if (!versionMatch) {
    console.error(`❌ Could not extract version from filename: ${filename}`);
    process.exit(1);
}

const version = versionMatch[1];

console.log(`Syncing version ${version} across build files...`);

// Update CMakeLists.txt
const cmakePath = path.join(process.cwd(), 'native/CMakeLists.txt');
let cmakeContent = await fs.readFile(cmakePath, 'utf8');

// Update both project VERSION and BUILD_VERSION
const originalCmakeContent = cmakeContent;
cmakeContent = cmakeContent.replace(
    /project\(NEL_scape_space VERSION [0-9.]+\)/,
    `project(NEL_scape_space VERSION ${version})`
);
cmakeContent = cmakeContent.replace(
    /set\(BUILD_VERSION "v[0-9.]+"\)/,
    `set(BUILD_VERSION "v${version}")`
);

if (originalCmakeContent !== cmakeContent) {
    await fs.writeFile(cmakePath, cmakeContent);
    console.log('✅ Updated CMakeLists.txt');
} else {
    console.log('⚠️  No changes made to CMakeLists.txt - pattern may not match');
}

// Update constants.ts with enhanced debugging
const constantsPath = path.join(process.cwd(), 'src/stores/constants.ts');

// Check if file exists
if (!(await fs.pathExists(constantsPath))) {
    console.error(`❌ File not found: ${constantsPath}`);
    process.exit(1);
}

let constantsContent = await fs.readFile(constantsPath, 'utf8');

console.log(`\n🔍 Debugging constants.ts replacement:`);
console.log(`   File: ${constantsPath}`);
console.log(`   Target version: v${version}`);

// Show current content around BUILD_VERSION
const buildVersionLines = constantsContent.split('\n').filter(line =>
    line.includes('BUILD_VERSION')
);
if (buildVersionLines.length > 0) {
    console.log(`   Current BUILD_VERSION lines:`);
    buildVersionLines.forEach(line => console.log(`     ${line.trim()}`));
} else {
    console.log(`   ⚠️  No lines containing 'BUILD_VERSION' found`);
    console.log(`   First 10 lines of file:`);
    constantsContent.split('\n').slice(0, 10).forEach((line, i) =>
        console.log(`     ${i+1}: ${line}`)
    );
}

// Test the regex pattern
const buildVersionRegex = /BUILD_VERSION:\s*string\s*=\s*["']v[0-9.]+["']/g;
const matches = constantsContent.match(buildVersionRegex);
console.log(`   Regex matches found: ${matches ? matches.length : 0}`);
if (matches) {
    matches.forEach(match => console.log(`     "${match}"`));
}

// Try the original pattern
const originalRegex = /BUILD_VERSION: string = "v[0-9.]+"/g;
const originalMatches = constantsContent.match(originalRegex);
console.log(`   Original regex matches: ${originalMatches ? originalMatches.length : 0}`);
if (originalMatches) {
    originalMatches.forEach(match => console.log(`     "${match}"`));
}

// Perform the replacement with the more flexible pattern
const originalConstantsContent = constantsContent;
constantsContent = constantsContent.replace(
    /BUILD_VERSION: string = "(?:v[0-9.]+)?"/,
    `BUILD_VERSION: string = "v${version}"`
);

if (originalConstantsContent !== constantsContent) {
    await fs.writeFile(constantsPath, constantsContent);
    console.log('✅ Updated constants.ts');

    // Show what was changed
    const newBuildVersionLines = constantsContent.split('\n').filter(line =>
        line.includes('BUILD_VERSION')
    );
    console.log(`   New BUILD_VERSION lines:`);
    newBuildVersionLines.forEach(line => console.log(`     ${line.trim()}`));
} else {
    console.log('❌ No changes made to constants.ts - regex pattern did not match');
    console.log('   Please check the exact format of BUILD_VERSION in your file');
}

// Update package.json to match
const packagePath = path.join(process.cwd(), 'package.json');
const packageJson = await fs.readJSON(packagePath);
const oldVersion = packageJson.version;
packageJson.version = version;
await fs.writeJSON(packagePath, packageJson, { spaces: 2 });

if (oldVersion !== version) {
    console.log(`✅ Updated package.json version: ${oldVersion} → ${version}`);
} else {
    console.log('✅ package.json version already correct');
}

console.log(`\n✅ Version ${version} sync completed`);
console.log(`   Source: ${path.relative(process.cwd(), uiJsonFile)}`);
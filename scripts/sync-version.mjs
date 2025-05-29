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
cmakeContent = cmakeContent.replace(
  /project\(NEL_scape_space VERSION [0-9.]+\)/,
  `project(NEL_scape_space VERSION ${version})`
);
cmakeContent = cmakeContent.replace(
  /set\(BUILD_VERSION "v[0-9.]+"\)/,
  `set(BUILD_VERSION "v${version}")`
);

await fs.writeFile(cmakePath, cmakeContent);

// Update constants.ts
const constantsPath = path.join(process.cwd(), 'src/stores/constants.ts');
let constantsContent = await fs.readFile(constantsPath, 'utf8');

constantsContent = constantsContent.replace(
  /BUILD_VERSION: string = "v[0-9.]+"/,
  `BUILD_VERSION: string = "v${version}"`
);

await fs.writeFile(constantsPath, constantsContent);

// Update package.json to match
const packagePath = path.join(process.cwd(), 'package.json');
const packageJson = await fs.readJSON(packagePath);
packageJson.version = version;
await fs.writeJSON(packagePath, packageJson, { spaces: 2 });

console.log(`✅ Version ${version} synced successfully across all build files`);
console.log(`   Source: ${path.relative(process.cwd(), uiJsonFile)}`);
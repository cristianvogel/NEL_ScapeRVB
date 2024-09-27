import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";

// take an optional --dev flag and set watch mode accordingly
const watch = process.argv.includes("--dev");

//build the application
const config = {
        entryPoints: ["dsp/main.svelte.js"],
        outfile: "public/dsp.main.js",
        minify: false, //so the resulting code is easier to understand
        bundle: true,
        plugins: [
            esbuildSvelte(),
        ],
    };

// watch the application in dev mode
/*
The error indicates that the watch option is not valid in the build() call. 
This suggests that the watch option might not be supported directly 
in the build() method in the version of esbuild you are using.
Instead, you should use the esbuild.context() method to handle the watch functionality.
*/

async function build() {
  try {
    const context = await esbuild.context(config);
    if (watch) {
      await context.watch();
      console.log('watching...');
    } else {
      await context.rebuild();
      console.log('build completed');
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

build();
# NEL scape | space
-- --
## Hybrid algorithmic / convolution reverb and delay effect with a totally over the top UI


#### 👀 Testers, go straight to the release builds check  ►🤙🏽 https://github.com/cristianvogel/NEL_ScapeRVB/releases
-- --
### **TO BUILD FROM SOURCE:**

You're going to need to install the js dependencies, with `--legacy-peer-deps` flag because of `Svelte5` still being in beta.

```
npm install --legacy-peer-deps
```

### Native dependencies

I build locally with a version v7.0.5 of JUCE  - [JUCE SOURCE](https://github.com/juce-framework/JUCE/releases/tag/7.0.5)

You need to put that content in the `native` folder and also put the KeyZy Activation Licensing manager library in the `native` folder. I'm not using it yet, but hope to put that license system in soon. For convenience, you can download the library from here: 

https://drive.google.com/open?id=1-RCQ5WLJb1WLsBIBfCX6v8L8wG-cKnJA&usp=drive_fs

or direct from the KeyZy website: [www.keyzy.io](https://developer.keyzy.io/download-cpp-static-library)

Adapt `scripts/build-native.mjs` for your target platform and architecture, 
hopefully then  run the build script:

```
npm run build
```

You should get artefacts in the `native/build/scripted/NEL_scape_space_artefacts` folder that can be copied to the VST3 folder on your system.

━━━━


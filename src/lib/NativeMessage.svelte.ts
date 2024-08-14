import { ConsoleText, HostState } from "../stores/stores.svelte";

//@ts-nocheck
export declare var globalThis: any;



/** ━━━━━━━
 * Main method for processing and denormalizing parameter values sent from the host
 * received via the `__receiveStateChange__` global function.
 * @param state - The state object received from the host.
 */

function processHostState(state: any) {
  // ━━━━━━━
  // Parse the state object and convert it to an array of key-value pairs
  let parsedEntries: { [key: string]: number | number[] } = {};
  try {
    parsedEntries = JSON.parse(state);
  } catch (e) {
    console.warn("Bad state received", parsedEntries);
  }
  HostState.update(parsedEntries);
}

/** ━━━━━━━
 * Callable functions for interfacing with the Host code.
 **/
export const MessageToHost = {
  /** ━━━━━━━
   * Manually get the current state key of each storage slot and serialize for
   * persistentState storage in the host plugin. We need to stash and retrieve the view state
   * as the WebView is destroyed when the user closes the plugin window.
   * The solution must also work for preset store/recall originating from DAW Host.
   **/
  stashMeshState: function () {
    let dataToPersist = {
       presets: {},
      license: 'VALID',
    };
    this.__setMeshStateInHost(dataToPersist);
  },

  /** ━━━━━━━
   * Update parameter values in the host.
   * @param paramId - The ID of the parameter to update.
   * @param value - The new value of the parameter.
   */
  requestParamValueUpdate: function (paramId: string, value: number) {
    if (typeof globalThis.__postNativeMessage__ === "function") {
      ConsoleText.update( paramId + " ► " + value);
      globalThis.__postNativeMessage__("setParameterValue", {
        paramId,
        value,
      });
    }
  },

  /** ━━━━━━━
   * Send a ready message to the host.
   */
  requestReady: function () {
    if (typeof globalThis.__postNativeMessage__ === "function") {
      globalThis.__postNativeMessage__("ready", {});
    }
  },

  /** ━━━━━━━
   * Send an unlock message to the KeyZey handler.
   * @param serial - The serial number for unlocking.
   */
  requestUnlock: function (serial: string = "") {
    // if (get(LicenseStatus) !== LICENSE_VALIDATED) {
    //   console.count("Requesting unlock");
    //   if (typeof globalThis.__postNativeMessage__ === "function") {
    //     // globalThis.__postNativeMessage__("unlock", { serial });
    //   }
    // }
  },

  /** ━━━━━━━
   * Store any persistent UI state in the host.
   * @param dataToPersist - The data to persist in the host.
   */
  __setMeshStateInHost: function (dataToPersist: any) {
    if (typeof globalThis.__postNativeMessage__ === "function") {
     // stash view secondary state 
    }
  },

  /** ━━━━━━━
   * Hot reload the DSP during development.
   */
  __bindHotReload: function () {
    if (process.env.NODE_ENV !== "production") {
      //@ts-ignore
      import.meta.hot?.on("reload-dsp", () => {
        // console.log("Sending reload dsp message");

        if (typeof globalThis.__postNativeMessage__ === "function") {
          globalThis.__postNativeMessage__("reload");
        }
      });
    }
  },
};

/** ━━━━━━━
 * Registers the message handlers for receiving and processing messages from the host.
 * This function sets up global functions that handle state changes, mesh state changes,
 * license activation, error handling, and host information.
 */

export function RegisterMessagesFromHost() {
  /** ━━━━━━━
   * Handles the state change received from the host.
   * @param state - The host state change object.
   */
  globalThis.__receiveStateChange__ = function (state: any) {
  processHostState(state);

  };


  /** ━━━━━━━
   * Handles the unlock status received from the host.
   * @param status - The unlock status string.
   */
  globalThis.__onUnlock__ = function (status: string | undefined) {
    /** to do */
    // LicenseStatus.set(status || "License not valid");
    // if (status === LICENSE_VALIDATED) {
    //   globalThis.__postNativeMessage__("ready", {});
    //   MessageToHost.stashMeshState();
    // }
  };

  /** ━━━━━━━
   * Handles the DAW name received from the host.
   * @param message - The host information object.
   */
  globalThis.__hostInfo__ = function (message: string) {
     console.log("Got host Info: ", message);
  };

  /** ━━━━━━━
   * DEV: Handles an error received from the host.
   * @param error - The error object.
   */
  globalThis.__receiveError__ = function (error: any) {
    //ConsoleText.set("Error: " + error);
    ConsoleText.update("Error: " + error);
  };

  globalThis.__log__ = function (log: any) {
    //ConsoleText.set("Error: " + error);
    console.warn("Log: ", log);
  };
}
 
import {
  ConsoleText,
  GestureSource_SCAPE,
  GestureSource_SRVB,
} from "../stores/stores.svelte";
import { REGISTERED_PARAM_NAMES } from "../stores/constants";

export declare var globalThis: any;
declare var CABLES: any;

/* ━━━━━━━
 * Initialize a WebSocket connection to the host.
 * @param port - The port number to connect to.
 */
// Create WebSocket connection.
let socketPort: number = 0;

function initializeWebSocketConnection(port: number) {
  socketPort = port;
  try {
    CABLES.patch.getVar("ext_serverInfo").setValue(`ws://127.0.0.1:${port}`); // we should definitely have CABLES loaded at this point
  } catch (e) {
    console.error("Error connecting to WS: ", e);
  }
  ConsoleText.extend("Connected to port: " + port);
}

function processHostState(state: any) {
  let parsedEntries: { [key: string]: number } = {};

  try {
    parsedEntries = JSON.parse(state);
  } catch (e) {
    console.warn("Bad state received", parsedEntries);
  }

  const srvbBypass = parsedEntries.srvbBypass > 0.5 ? 1 : 0;
  const scapeBypass = parsedEntries.scapeBypass > 0.5 ? 1 : 0;

  function updateView(param, boolValue) {
    let gestureSource;
    if (param === "srvbBypass") gestureSource = GestureSource_SRVB;
    if (param === "scapeBypass") gestureSource = GestureSource_SCAPE;
      if (gestureSource.prev === "ui") gestureSource.update("host");
      let cablesVar = CABLES.patch.getVar("host_" + param);
      cablesVar.setValue(boolValue);
      ConsoleText.extend(`View << ${param} to ${boolValue}`);
  }

  updateView("srvbBypass", srvbBypass);
  updateView("scapeBypass", scapeBypass);
}

export const MessageToHost = {
  updateHost: function (paramId: string, value: number) {
    if (typeof globalThis.__postNativeMessage__ === "function") {
      globalThis.__postNativeMessage__("setParameterValue", {
        paramId,
        value: value > 0.5 ? 1.0 : 0.0,
      });
    }
  },

  /** ━━━━━━━
   * Send a ready message to the host.
   */
  requestReady: function () {
    console.log(REGISTERED_PARAM_NAMES);
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
   * Handles receiving the port for this instance of the plugin.
   * @param port - The port number.
   * */

  globalThis.__receiveServerInfo__ = function (port: number) {
    initializeWebSocketConnection(port);
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
    ConsoleText.update(">> " + error);
  };

  globalThis.__log__ = function (log: any) {
    //ConsoleText.set("Error: " + error);
    console.warn("Log: ", log);
  };
}

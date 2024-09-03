//@ts-nocheck
/// Svelte5 state stores

/////////////////////////
export const UI_SrvbParams = ui_srvbParams({});
function ui_srvbParams(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    snapshot() {
      return $state.snapshot(current);
    }
  };
}

export const UI_ScapeParams = scapeParams({});
function scapeParams(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    snapshot() {
      return $state.snapshot(current);
    }
  };
}

export const UI_AdditionalParams = additionalParams( {} );
function additionalParams(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    snapshot() {
      return $state.snapshot(current);
    }
  };
}
//////////////////////
export const ConsoleText = consoleText("_");
function consoleText(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
  };
}
//////////////////////
export const CablesPatch = cablesPatch({});
function cablesPatch(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
  };
}
//////////////////////
export const HostState = hostState();
function hostState(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    snapshot() {
      return $state.snapshot(current);
    }
  };
}

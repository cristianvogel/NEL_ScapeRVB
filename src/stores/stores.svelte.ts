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

type ParamData = { name: string, value: number };

export const UI_ChangingParamID = ui_mouseIsChangingParamID( {name: '', value: 0} );
function ui_mouseIsChangingParamID(initial: ParamData) {
  let current: ParamData = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      if (!ControlSource === 'ui' || !newValues.name ) {
        return;
      }
      current = newValues;
    }
  };
}

export const ControlSource = controlSource('');
function controlSource( initial ) {
  let current = $state(initial);
  return { 
    get current() {
      return current;
    } ,
    update(newValue) {
      current = newValue;
    } 
  }
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

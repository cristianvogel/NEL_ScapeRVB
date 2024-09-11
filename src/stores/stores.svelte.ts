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

export const UI_ChangingParamID = ui_mouseIsChangingParamID( {name: 'disengage', value: 0} );
function ui_mouseIsChangingParamID(initial: ParamData) {
  let current: ParamData = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValue) {
      current = newValue;
    },
    updateName(newName) {
      if ( newName ) current.name = newName;
    },
    updateValue(newValue?) {
      if ( newValue ) current.value = newValue + EPS
      else 
      current.value = current.value + EPS;
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
  let extended = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    extend(newText) {
      extended = newText;
    },
    get extended() {
      return extended;
    }
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

//@ts-nocheck
/// Svelte5 state stores

import { bypassEvents, bypassStates } from "../types";
import { fsm } from '@githubnext/tiny-svelte-fsm';
/////////////////////////

export const srvbBypassFSM = fsm<bypassStates, bypassEvents>('0', {
	'0': {
		toggle: '1'
	},
	'1': {
		toggle: '0'
	}
});

export const scapeBypassFSM = fsm<bypassStates, bypassEvents>('0', {   // - default state 
  '0': {
    toggle: '1'
  },
  '1': {
    toggle: '0'
  }
});



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

export const UI_ChangingParamID = ui_mouseIsChangingParamID( '' );
function ui_mouseIsChangingParamID(initial: string) {
  let current: string = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValue) {
      current = newValue;
    },
    snapshot() {
      return $state.snapshot(current);
    }
  };
}

export const UI_NormValue = ui_normValue(0);
function ui_normValue(initial: number) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValue) {
      current = newValue;
    },
    snapshot() {
      return $state.snapshot(current);
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
    } ,
    snapshot() {
      return $state.snapshot(current);
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

//@ts-nocheck
/// Svelte5 state stores

import { bypassEvents, bypassStates } from "../types";
import { fsm } from '@githubnext/tiny-svelte-fsm';
/////////////////////////
export const WebSocketPort = webSocketPort(0);
function webSocketPort(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    assign(newValue) {
      current = newValue;
    },
  };
}

/////////////////////

export const GestureSource_SCAPE = controlSource_SCAPE('host');
function controlSource_SCAPE( initial ) {
  let current = $state(initial);
  let prev = initial ;
  return { 
    get current() {
      return current;
    } ,
    get prev() {
      return prev;
    },
    update(newValue) {
      prev = $state.snapshot(current);
      current = newValue;
    } ,
    snapshot() {
      return $state.snapshot(current);
    }
  }
}

export const GestureSource_Reverse = controlSource_scapeReverse('host');
function controlSource_scapeReverse( initial ) {
  let current = $state(initial);
  let prev = initial ;
  return { 
    get current() {
      return current;
    } ,
    get prev() {
      return prev;
    },
    update(newValue) {
      prev = $state.snapshot(current);
      current = newValue;
    } ,
    snapshot() {
      return $state.snapshot(current);
    }
  }
}

export const GestureSource_SRVB = controlSource_SRVB('host');
function controlSource_SRVB( initial ) {
  let current = $state(initial);
  let prev = initial ;
  return { 
    get current() {
      return current;
    } ,
    get prev() {
      return prev;
    },
    update(newValue) {
      prev = $state.snapshot(current);
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
    get current(): string {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    extend(newText) {
      setTimeout(() => {
        extended = '';
      }, 3000);
      extended = extended + ' | ' + newText;
    },
    get extended() {
      return extended;
    }
  };
}
//////////////////////
export const CablesReady = cablesReady(false);
function cablesReady(initial) {
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
///////////////
export const HostState = hostState({});
function hostState(initial) {
  let current = $state(initial);
  return {
    get current() {
      return current;
    },
    update(newValues) {
      current = newValues;
    },
    get snapshot() {
      return $state.snapshot(current);
    }
  };
}


//////// Deprecating


// export const srvbBypassFSM = fsm<bypassStates, bypassEvents>('0', {
// 	'0': {
// 		toggle: '1'
// 	},
// 	'1': {
// 		toggle: '0'
// 	}
// });

// export const scapeBypassFSM = fsm<bypassStates, bypassEvents>('0', {   // - default state 
//   '0': {
//     toggle: '1'
//   },
//   '1': {
//     toggle: '0'
//   }
// });
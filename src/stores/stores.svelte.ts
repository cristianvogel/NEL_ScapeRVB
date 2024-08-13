/// Svelte5 state stores

/////////////////////////
export const DialValues = dialValues({});
function dialValues(initial) {
    let current = $state(initial);
    return {
        get current() { return current },
        update(newValues) { current = newValues }
    };
}
//////////////////////
export const ConsoleText = consoleText('_');
function consoleText(initial) {
    let current = $state(initial);
    return {
        get current() { return current },
        update(newValues) { current = newValues }
    };
}
//////////////////////
export const CablesPatch = cablesPatch({});
function cablesPatch(initial) {
    let current = $state(initial);
    return {
        get current() { return current },
        update(newValues) { current = newValues }
    };
}

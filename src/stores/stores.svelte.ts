

export const DialValues = dialValues([]);

function dialValues(initial) {
    let value = $state(initial);
    return {
        get value() { return value },
        set value(v) { value = v }
    };
}
const
    exec = op.inTrigger("Trigger"),
    arr = op.inArray("Array"),
    result = op.outNumber("Result");

let count = 0;

exec.onTriggered = () => {
    if (!arr.get()) return;

    count = 0; // Reset count each time the trigger is executed

    for (let arrEl of arr.get()) {
        if (arrEl.length > 0) count++;
    }

    result.set(count);
};
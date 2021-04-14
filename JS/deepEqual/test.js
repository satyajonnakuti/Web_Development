function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    else if ((typeof a === "object" && a !== null) && (typeof b === "object" && b !== null)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }
        for (var each in b) {
            if (!(each in a) || !deepEqual(a[each], b[each]))
                return false;
        }
        return true;
    }
    return false
}
console.log(deepEqual('deep', 'equal'))
console.log(deepEqual('js', 'js'))
document.write("Are 'deep' and 'equal'  equal?")
document.write("<br>")
document.write(deepEqual('deep', 'equal'))
document.write("<br>")
document.write("<br>")
document.write("Are 'js' and 'js'  equal?")
document.write("<br>")
document.write(deepEqual('js', 'js'))
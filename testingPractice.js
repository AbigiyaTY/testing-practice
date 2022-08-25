const stringLength = (string) => {
    n = string.length;
    if (n >= 1 && n <= 10) {
        return n;
    } else {
        return 'error';
    }
}
const reverseString = (string) => {

    return string.split("").reverse().join("");

}

class SimpleCalculator {

    static add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return 'NOT A Number';
        } else {
            return a + b;
        }
    }
    static sub(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return 'NOT A Number';
        } else {
            return a - b;
        }
    }
    static mul(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return 'NOT A Number';
        } else {
            return a * b;
        }
    }
    static div(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return 'NOT A Number';
        } else {
            return a / b;
        }
    }
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = { stringLength, reverseString, SimpleCalculator, capitalize };
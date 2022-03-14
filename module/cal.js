function calculator(x, y, z) {
    let result = 0;
    if (z == 1) {
        result = x + y
    } else if (z == 2) {
        result = x - y
    } else if (z == 3) {
        result = x * y
    } else {

        result = x / y

    }
    return result
}

module.exports = { calculator }


// Export
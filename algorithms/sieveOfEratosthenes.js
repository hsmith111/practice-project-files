const sieveOfEratosthenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;

    for (let i = 2; i <= limit; i++) {
        if (output[i] === true) {
            for (let j = i * 2; j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }
    return findTrueIndices(output);
}

const findTrueIndices = (arr) => {
    const resultsArray = [];
    arr.forEach((value, index) => {
        if (value === true) {
            resultsArray.push(index);
        }
    });
    return resultsArray;
}

const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);

// Leave this line for testing:
module.exports = sieveOfEratosthenes;
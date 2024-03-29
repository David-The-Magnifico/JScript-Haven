function calculateDifference(input) {
    let max = input[0];
    let min = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
        if (input[i] < min) {
            min = input[i];
        }
    }

    return max - min;
}

let input = [2, 4, 5, 7, 8];
let output = calculateDifference(input);
console.log("Output: " + output);

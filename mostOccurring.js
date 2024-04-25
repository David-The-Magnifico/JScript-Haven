function mostOccurringNumber(input) {
    let count = {};
    let maxCount = 0;
    let mostOccurringNum = null;

    for (let num of input) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }

        if (count[num] > maxCount) {
            maxCount = count[num];
            mostOccurringNum = num;
        }
    }

    return mostOccurringNum;
}

let input = [1, 1, 2, 2, 2];
let input2 = [3,3,3,3,1];
console.log(mostOccurringNumber(input));
console.log(mostOccurringNumber(input2));
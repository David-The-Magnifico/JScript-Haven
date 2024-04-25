let mostOccurringNumber = require("./mostOccurring.js"); 

test("mostOccurringNumber function returns the correct most occurring number", () => {
    expect(mostOccurringNumber([1, 1, 2, 2, 2])).toBe(2);
    expect(mostOccurringNumber([3, 3, 3, 2, 2, 2])).toBe(3);
    expect(mostOccurringNumber([1, 2, 3, 4, 5])).toBe(null);
    expect(mostOccurringNumber([1, 1, 1, 1, 1])).toBe(1);
    expect(mostOccurringNumber([1, 2, 3, 4, 5, 5, 5, 5, 5])).toBe(5);
});
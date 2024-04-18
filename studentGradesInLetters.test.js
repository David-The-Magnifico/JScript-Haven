const getLetterGrade = require('./studentGradesInLetters.js');

test('return correct letter grade for given score', () => {
    expect(getLetterGrade(95)).toBe('A');
    expect(getLetterGrade(78)).toBe('C');
    expect(getLetterGrade(85)).toBe('B');
    expect(getLetterGrade(60)).toBe('D');
    expect(getLetterGrade(45)).toBe('F');
    expect(getLetterGrade(92)).toBe('A');
});
const studentScores = [95, 78, 85, 60, 45, 92];

const getLetterGrade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};

const studentGrades = studentScores.map(score => getLetterGrade(score));

console.log(studentGrades);

module.exports = getLetterGrade;
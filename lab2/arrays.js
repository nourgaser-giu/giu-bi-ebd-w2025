const grades = [40, 55, 78, 90, 100]

grades.forEach(grade => { console.log(grade) })

const gradesWithBonus = grades.map(grade => grade + 5)

const passingGrades = grades.filter(grade => grade >= 50)

console.log({ gradesWithBonus, passingGrades })
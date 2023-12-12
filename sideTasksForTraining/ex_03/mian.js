const names = [`João`, `Maria`, `José`, `Pedro`, `Paulo`];
const RandomArray = [1, 2, 3, 4, 5]

function Student(name, grades) {
    this.name = name;
    this.grades = grades;
}
Student.prototype.calculateAverage = function () { return Number((this.grades.reduce((tot, v) => tot += v, 0) / this.grades.length).toFixed(2)) }

function RandomNumbers(quantNota) {
    const grades = [];
    for (let i = 0; i < quantNota; i++) {
        const randomGrade = Math.ceil(Math.random() * ((100 - 0.5) + 1) - 0.5)
        grades.push(randomGrade);
    }
    return grades;
}

function students() {
    students = [];
    for (let i = 0; i < 5; i++) {
        students.push(new Student(names[i], RandomNumbers(3)));
    }
    return students
}

function calculateAverage(gradesArray) {
    return Number((gradesArray.reduce((tot, v) => tot += v, 0) / gradesArray.length).toFixed(2))
}

function filterStudentsByAverage(arrayOfStudents, minimumGradeToPass, averageGradesArray) {
    const aproveds = arrayOfStudents.filter((obj, index) => {
        if (averageGradesArray[index] >= minimumGradeToPass) {
            return { obj, avarage: averageGradesArray[index] }
        }
    });
    return aproveds
}

function recursiveSum(iterator = 0) {
    if (iterator < RandomArray.length) { return }
    sum += RandomArray[iterator];
    iterator++
    recursiveSum(iterator);
}

function findStudent(name) {
    for (let student of arrayOfStudents) {
        if (student.name.toLowerCase() === name.toLowerCase()) {
            return student.calculateAverage();
        }
    }
    return `Aluno não encontrado `;
}


arrayOfStudents = students();
averageGradesArray = [];
for (let { grades } of arrayOfStudents) {
    averageGradesArray.push(calculateAverage(grades))
}
const aprovedStudents = filterStudentsByAverage(arrayOfStudents, 85, averageGradesArray);

console.log(aprovedStudents);
console.log(averageGradesArray, `\n`);
console.log(((averageGradesArray.reduce((tot, v) => tot += v, 0)) / averageGradesArray.length).toFixed(2), `\n`)
console.log(findStudent(`teste`));

for (let student of arrayOfStudents) {
    console.log(`Nome: ${student.name},  Média : ${student.calculateAverage()}`)
}


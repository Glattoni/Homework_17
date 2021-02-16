class Student {
    constructor(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.attendance = [];
        this.grades = [];
    }
    get Age() {
        const yearInMs = 31556952000;
        return Math.floor((Date.now() - Date.parse(this.dob)) / yearInMs);
    }
    get present() {
        let { length } = [...this.attendance];
        if (length < Student.maxArrSize) {
            this.attendance[length++] = true;
        }
        return this.attendance;
    }
    get absent() {
        let { length } = [...this.attendance];
        if (length < Student.maxArrSize) {
            this.attendance[length++] = false;
        }
        return this.attendance;
    }
    mark(grade) {
        let { length } = [...this.grades];
        if (length < Student.maxArrSize && grade > Student.minGradeValue && grade <= Student.maxGradeValue) {
            this.grades[length++] = grade;
        }
        return this.grades;
    }
    avgGrade() {
        const gradesSum = this.grades.reduce((prev, cur) => prev + cur);
        return gradesSum / Student.maxArrSize;
    }
    avgAttandance() {
        return (Student.HundredPercent / Student.maxArrSize) * this.attendance.filter(el => el).length;
    }
    summary() {
        const avgGrade = this.avgGrade();
        const avgAttandance = this.avgAttandance();
        if (avgGrade < Student.minGoodGrade && avgAttandance < Student.minGoodAttandance) {
            return 'Редиска!';
        }
        if (avgGrade < Student.minGoodGrade || avgAttandance < Student.minGoodAttandance) {
            return 'Норм, но можно лучше';
        }
        if (avgGrade > Student.minGoodGrade && avgAttandance > Student.minGoodAttandance) {
            return 'Ути какой молодчинка!';
        }
    }
}

Object.defineProperties(Student, {
    maxArrSize: {
        value: 30,
    },
    minGradeValue: {
        value: 0,
    },
    maxGradeValue: {
        value: 10,
    },
    HundredPercent: {
        value: 100,
    },
    minGoodGrade: {
        value: 9,
    },
    minGoodAttandance: {
        value: 90,
    },
});

const test = () => {
    const Alex = new Student('Alexy', 'Parastyuk', 'October 11,2000');
    return Alex;
};

test();

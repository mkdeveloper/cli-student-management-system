import Student from "./student.js";
import chalk from "chalk";

class studentService {
  _students: Student[];

  constructor() {
    this._students = [];
  }

  addStudent(item: Student) {
    this._students.push(item);
  }

  addCourse(id: number, course: { name: string; instructor: string }) {
    this._students[id].setCourse = course;
  }

  returnCourse(id: number) {
    return this._students[id].getCourse;
  }

  printView() {
    if (this._students.length !== 0) {
      for (let obj of this._students) {
        console.log(
          chalk.greenBright(`
            *******************************
            Id: ${obj.getId}
            Name: ${obj.getName}
            Father name: ${obj.getFname}
            Address: ${obj.getAddress}
            Balance: ${obj.getBalance}
            Courses: ${obj.getCourse}
            ${chalk.redBright(obj.getbalanceState)}
            *******************************
            `)
        );
      }
    } else {
      console.log("No record found");
    }
  }
}

export default studentService;

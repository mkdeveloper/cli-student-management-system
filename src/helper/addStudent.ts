import chalk from "chalk";
import inquirer from "inquirer";
import Student from "./student.js";
import studentService from "./studentServices.js";
import { validatorNum, validatorString } from "./validator.js";

async function addStudent(param: studentService) {
  const { std_name, fName, address, age } = await inquirer.prompt([
    {
      name: "std_name",
      type: "input",
      message: "Enter student name: ",
      validate: validatorString,
    },
    {
      name: "fName",
      type: "input",
      message: "Enter father name: ",
      validate: validatorString,
    },
    {
      name: "address",
      type: "input",
      message: "Enter student address: ",
      validate: validatorString,
    },
    {
      name: "age",
      type: "input",
      message: "Enter student age: ",
      validate: validatorNum,
    },
  ]);

  const student = new Student(std_name, fName, age, address);

  param.addStudent(student);
  console.log(chalk.greenBright("Student Record Added"));
}

export default addStudent;

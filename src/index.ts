#! /usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";
import addStudent from "./helper/addStudent.js";
import balance from "./helper/balance.js";
import courseEnroll from "./helper/enrollCourse.js";
import feeState from "./helper/feeState.js";
import studentService from "./helper/studentServices.js";
import welcome from "./helper/welcome.js";

const msg = `
*********************************************
*********************************************
   Welcome To MK Student Management System
*********************************************
*********************************************
`;

await welcome(msg);

const stdArr = new studentService();

async function main() {
  const { answer } = await inquirer.prompt({
    name: "answer",
    type: "list",
    choices: [
      "Add Student",
      "Balance",
      "Fee",
      "Enroll course",
      "Status",
      "Exit",
    ],
  });

  switch (answer) {
    case "Add Student":
      await addStudent(stdArr);
      break;
    case "Balance":
      await balance(stdArr);
      break;
    case "Fee":
      await feeState(stdArr);
      break;
    case "Enroll course":
      await courseEnroll(stdArr);
      break;
    case "Status":
      stdArr.printView();
      break;
    case "Exit":
      const msg = `
******************************************************
******************************************************
   Thank You for using MK Student Management System
******************************************************
******************************************************
`;

      await welcome(msg);
      exit(0);
  }

  await main();
}

main();

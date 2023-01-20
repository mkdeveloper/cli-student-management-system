import chalk from "chalk";
import inquirer from "inquirer";
import studentService from "./studentServices.js";
import { validatorNum } from "./validator.js";

async function feeState(params: studentService) {
  if (params._students.length > 0) {
    const { id } = await inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "Please enter student Id: ",
        validate: validatorNum,
      },
    ]);

    const stdId = params._students.findIndex((obj) => obj.getId == id);
    if (stdId !== -1) {
      const feeStatus = params._students[stdId].getFee;
      if (params.returnCourse(stdId).length > 0 && feeStatus === false) {
        params._students[stdId].setFee = true;
        params._students[stdId].setBalance = 0;
        console.log("Fee Paid");
      } else {
        let msg = !feeStatus ? "No course is selected" : "Fee already Paid";
        console.log(chalk.redBright(msg));
      }
    } else {
      console.log("Wrong Entry");
    }
  } else {
    console.log("No Record Found");
  }
}

export default feeState;

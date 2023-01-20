import inquirer from "inquirer";
import studentService from "./studentServices.js";
import { validatorNum } from "./validator.js";

async function balance(params: studentService) {
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
      const balance = params._students[stdId].getBalance;
      console.log(balance);
    } else {
      console.log("No Course is selected");
    }
  } else {
    console.log("Wrong Entry");
  }
}

export default balance;

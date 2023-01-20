import inquirer from "inquirer";
import courseArr from "./courses.js";
import studentService from "./studentServices.js";
import { validatorNum } from "./validator.js";

async function courseEnroll(params: studentService) {
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
      let restart = false;
      do {
        const { courses } = await inquirer.prompt({
          name: "courses",
          type: "rawlist",
          message: "Select Course: ",
          choices: courseArr,
        });
        params.addCourse(stdId, courses);
        const feeStatus = params._students[stdId].getFee;
        if (params.returnCourse(stdId).length > 0 && feeStatus === false) {
          const courseCount = params.returnCourse(stdId).length;
          params._students[stdId].setBalance = courseCount * 3000;
        }
        console.log("course added");

        const { addmoreCourses } = await inquirer.prompt({
          name: "addmoreCourses",
          type: "list",
          choices: ["Yes", "No"],
          message: "Do you want to add more courses",
        });

        restart = addmoreCourses === "Yes" ? true : false;
      } while (restart);
    } else {
      console.log("Wrong Id Entered");
    }
  } else {
    console.log("No Record Found");
  }
}

export default courseEnroll;

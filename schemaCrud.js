const inquirer = require("inquirer");
const fs = require("fs");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Welcome1!",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // ArtisQuestionAppFunction();
});

function afterConnection() {
  connection.query("SELECT * FROM Top5000", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}

function employeeTrackerStartQuestionsFunction() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do ?",
        name: "trackerStartQuestion",
        choices: [
          "Add Epmloyee",
          "Remove Epployee",
          "Update Employee Role",
          "Update Emplpoyee Manager",
          "View All Roles",
          "Add Role",
          "Remove Role",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.trackerStartQuestion === "Add Epmloyee") {
        // postQuestionFunction();
      }
    });
}
employeeTrackerStartQuestionsFunction()

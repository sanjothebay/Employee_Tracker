const inquirer = require("inquirer");

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
  employeeTrackerStartQuestionsFunction();
  // ArtisQuestionAppFunction();
});

function ViewAllEpmloyeeFun() {
  connection.query("SELECT * FROM employee", function (err, res) {
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
          "View Emloyees",
          "Add Epmloyee",
          "Remove Epployee",
          "Update Employee Role",
          "Update Emplpoyee Manager",
          "View All Roles",
          "Add Role",
          "Remove Role",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      switch (response.trackerStartQuestion) {
        case "View Emloyees":
          ViewAllEpmloyeeFun();
          break;
          case "Exit":
            connection.end();
          break;
      }
    });
}





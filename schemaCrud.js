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
});

function employeeTrackerStartQuestionsFunction() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do ?",
        name: "trackerStartQuestion",
        choices: [
          "View All Emloyee",
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
        case "View All Emloyee":
          ViewAllEpmloyeeFunction();
          break;
        case "Add Epmloyee":
          AddEpmloyeeFunction();
          break;
        case "Remove Epployee":
          RemoveEpployeeFunction();
          break;
        case "Update Employee Role":
          UpdateEmployeeRoleFunction();
          break;
        case "Update Emplpoyee Manager":
          UpdateEmplpoyeeManagerFunction();
          break;
        case "View All Roles":
          ViewAllRolesFunction();
          break;
        case "Add Role":
          AddRoleFunction();
          break;
        case "Remove Role":
          RemoveRoleFunction();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function ViewAllEpmloyeeFunction() {
  connection.query(
    "SELECT id, first_name, last_name FROM employee",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
      //employeeTrackerStartQuestionsFunction();
    }
  );
}

function ViewAllRolesFunction() {
  connection.query(
    "SELECT first_name, last_name, title FROM employee INNER JOIN roles ON employee.role_id = roles.id",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    }
  );
}

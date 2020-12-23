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

function AddEpmloyeeFunction() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the New Employee`s ID Number?",
        name: "NewEmployeeIdInput",
      },
      {
        type: "input",
        message: "What is the New Employee`s First Name?",
        name: "NewEmployeeFirstName",
      },
      {
        type: "input",
        message: "What is the New Employee`s Last Name?",
        name: "NewEmployeeLastName",
      },
      {
        type: "list",
        message: "What is the New Employee`s Role Id?",
        name: "NewEmployeeRoleId",
        choices: ["88", "14", "5", "10"],
      },
      {
        type: "list",
        message: "What is the Manager Id`s of the New Employee?",
        name: "NewEmployeeManagerId",
        choices: ["1", "14"],
      },
    ])
    .then(
      function (Data) {
        console.log(Data);
        "INSERT INTO employee SET ?",
          {
            id: Data.NewEmployeeIdInput,
            first_name: Data.NewEmployeeFirstName,
            last_name: Data.NewEmployeeLastName,
            role_id: Data.NewEmployeeRoleId,
            manager_id: Data.NewEmployeeManagerId,
          };
      },
      function (error) {
        if (error) throw error;
        console.log("Added New Employee To Database");
      }
    );
}

// function AddEpmloyeeFunction() {
//   connection.query(
//     "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ?",
//     ("id", "first_name", "last_name", "role_id", "manager_id"),
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       connection.end();
//       //employeeTrackerStartQuestionsFunction();
//     }
//   );
// }

// function RemoveEpployeeFunction() {
//   connection.query(
//     "DELETE FROM employee id, first_name, last_name, role_id, manager_id",
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       connection.end();
//       //employeeTrackerStartQuestionsFunction();
//     }
//   );
// }

// function UpdateEmployeeRoleFunction() {
//   connection.query(
//     "SELECT employee.id, first_name, last_name, title FROM employee INNER JOIN roles ON employee.id = roles.id",
//     "UPDATE SET title =   ; WHERE roles.id =  ;",
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       connection.end();
//       //employeeTrackerStartQuestionsFunction();
//     }
//   );
// }

// function UpdateEmplpoyeeManagerFunction() {
//   connection.query(
//     "SELECT id, first_name, last_name FROM employee, manager_id",
//     "UPDATE SET manager_id =   ; WHERE employee.manager_id =  ;",
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       connection.end();
//       //employeeTrackerStartQuestionsFunction();
//     }
//   );
// }

// function ViewAllRolesFunction() {
//   connection.query(
//     "SELECT employee.id, first_name, last_name, title FROM employee INNER JOIN roles ON employee.id = roles.id",
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       connection.end();
//     }
//   );
// }

// function AddRoleFunction() {
//   connection.query("INSERT INTO roles (role_id,)", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//     connection.end();
//     //employeeTrackerStartQuestionsFunction();
//   });
// }

// function RemoveRoleFunction() {
//   connection.query("DELETE FROM role role_id,", function (err, res) {
//     if (err) throw err;
//     console.table(res);
//     connection.end();
//     //employeeTrackerStartQuestionsFunction();
//   });
// }

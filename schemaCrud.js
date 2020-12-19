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
  database: "top_songsDB",
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
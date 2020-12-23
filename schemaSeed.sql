DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INTEGER,
  manager_id INTEGER
);

CREATE TABLE roles (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(8,4) NULL,
  department_id INTEGER,
);

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NULL
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (14, "JC", "Rodriguez", 14, 1), (4, "James", "Rios", 24, 2), 
(2, "Helena", "Rodriguez", 5, 1), (1, "Kryptonite", "Cruz", 88, null), 
(5, "John", "Carter", 10, 1), (7, "Janice", "Jones", 5, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUE (88, "Manager", 50.000, 1),(14, "Manager", 50.000, 2),
(24, "Engineer", 35.000, 2),
(5, "Developer", 25.000, 03), (10, "Intern", 10.000, 04);

INSERT INTO department (id,name)
VALUE (1, "Managers_Dept"), (14, "Managers_Dept"),
(4, "Engineering_Dept"), (2, "Developing_Dept"), 
(7, "Developing_Dept"), (5, "Intern_Dept");

-- SELECT * FROM employee;
-- SELECT * FROM roles;
-- SELECT * FROM department;

SELECT * FROM employee
INNER JOIN roles
ON employee.id = roles.id
INNER JOIN department
ON department.id = roles.id;
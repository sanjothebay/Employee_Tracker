DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INTEGER,
  manager_id INTEGER
);


DROP DATABASE IF EXISTS roles_db;

CREATE DATABASE roles_db;

USE roles_db;

CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(6,4) NULL,
  department_id INTEGER
);


DROP DATABASE IF EXISTS department_db;

CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NULL
);



SELECT * FROM employee

SELECT * FROM roles

SELECT * FROM department
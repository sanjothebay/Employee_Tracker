DROP DATABASE IF EXISTS department_db;

CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NULL
);



SELECT * FROM department
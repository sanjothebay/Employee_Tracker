DROP DATABASE IF EXISTS roles_db;

CREATE DATABASE roles_db;

USE roles_db;

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(6,4) NULL,
  department_id INTEGER
);



SELECT * FROM roles
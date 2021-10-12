CREATE DATABASE IF NOT EXISTS db;
GRANT ALL PRIVILEGES on db.*
TO 'root'@'%'
WITH GRANT OPTION;

USE db;

CREATE TABLE IF NOT EXISTS persons (
    PersonID INT AUTO_INCREMENT PRIMARY KEY,
    Firstname varchar(20),
    Lastname varchar(20)
);

DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;  
USE management_db;
-- Create department table
DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

-- Insert initial departments
INSERT INTO department (name) VALUES
('Engineering'),
('Sales'),
('Marketing');
('HR'),
('Finance');

-- Create role table
DROP TABLE IF EXISTS role;  
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Insert initial roles
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 85000, 1),
('Sales Manager', 102000, 2),
('Marketing Coordinator', 60000, 3);
('HR Specialist', 65000, 4),
('Financial Analyst', 73000, 5);

-- Create employee table
DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert initial employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jill', 'Smith', 2, 1),
('Michael', 'Johnson', 3, 1);
('Emily', 'Jones', 4, NULL),
('David', 'Brown', 5, NULL);

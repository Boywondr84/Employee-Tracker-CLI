INSERT INTO departments (name)
VALUES 
('Sales'),
('Finance'),
('Marketing'),
('R & D');


INSERT INTO roles (job_title, salary, department_id)
VALUES
('Sales Associate', '45000', 1),
('Accountant', '55000', 2),
('Advertising Director', '85000', 3),
('Manager', '125000', '1');


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Steven', 'Tyler', 1, '100');
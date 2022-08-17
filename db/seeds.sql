INSERT INTO departments (name)
VALUES 
('Sales'),
('Finance'),
('Marketing'),
('R & D');


INSERT INTO roles (job_title, salary, department_id)
VALUES
('Sales Associate', '45000', 1),
('Budget Analyst', '56000', 2),
('Sales Assistant', '52000', 1),
('Accountant', '55000', 2),
('Advertising Director', '85000', 3),
('Sales Manager', '125000', 1),
('Engineer', '75000', 4),
('Billing Administrator', '45000', 2),
('Inside Sales Rep', 30000, 1),
('Web developer', '50000', 3),
('Social Media Coordinator', '35000', 3),
('Finance Manager', '150000', 2),
('Sales Engineer', '65000', 1),
('Auditor', '45000', 2);


INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES
('Steven', 'Tyler', '100', 1),
('Keith', 'Richards', '0', 6),
('Nikki', 'Sixx', '300', 11),
('Ian', 'Anderson', '100', 3),
('Alice', 'Cooper', '0', 12),
('Joe', 'Walsh', '200', 2),
('Ringo', 'Starr', '100', 13);
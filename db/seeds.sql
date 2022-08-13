INSERT INTO departments (id, department_name)
VALUES 
('100', 'Sales'),
('200', 'Finance'),
('300', 'Marketing'),
('400', 'R & D');


INSERT INTO roles (id, role_title, salary, department_id)
VALUES
('10', 'Sales Associate', '45000', '100'),
('20', 'Accountant', '55000', '200'),
('30', 'Advertising Director', '85000', '300'),
('40', 'R & D Manager', '125000', '400');


-- INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
-- VALUES
-- ('1', 'Steven', 'Tyler', '', '')
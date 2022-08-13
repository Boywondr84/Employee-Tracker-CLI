SELECT
    roles.department_name AS department_name, departments.department_name AS department
    FROM roles
    JOIN departments ON roles.department = departments.id;
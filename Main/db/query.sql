SELECT e.first_name, e.last_name, r.title AS role, d.department_name
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
ORDER BY e.last_name, e.first_name;

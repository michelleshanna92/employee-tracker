INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Marketing'),
       ('Finance'),
       ('IT');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 60000, 1),
       ('Marketing Coordinator', 40000, 2),
       ('Financial Analyst', 55000, 3),
       ('IT Specialist', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1),
       ('Jane', 'Smith', 2),
       ('Michael', 'Johnson', 3),
       ('Emily', 'Williams', 4);

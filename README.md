# Module 12 Employee Tracker



## User Stories

* As a user, I want to create a new database.

* As a user, I want to store movie names and reviews in the database in two separate table.

* As a user, I want to see a list of all movies.

* As a user, I want to be able to create and delete a movie.

* As a user, I want to return a list of all the reviews and the associated movie name.

## Acceptance Criteria

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database


---

## Assets

---

## Notes

To test your routes you will use Insomnia. If you have not already downloaded it, you will need to visit the [Insomnia download page](https://insomnia.rest/download) and do so.

Refer to the documentation:

[Insomnia documentation on getting started](https://support.insomnia.rest/category/152-using-insomnia)

[Express.js documentation on routing](https://expressjs.com/en/guide/routing.html)

[MySQL documentation on joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)

[npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

## 💡 Hints

How can you link your `movies` and `reviews` tables?

How can you execute a query in an Express.js server using the npm `MySQL2` package?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you add a route to update a review?

Use [Google](www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
# employee-tracker

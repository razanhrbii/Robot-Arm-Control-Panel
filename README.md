# Smart Methods - Robot Arm Control Panel

This project is a simple web application that allows users to:
- Adjust 6 motor positions using sliders.
- Save poses to a MySQL database.
- Display saved poses in a table without refreshing the page (using AJAX).
- Toggle the status (0/1) for each pose.
- Reset all sliders to a default value of 90.

## Features
- Frontend: HTML, CSS, JavaScript
- Backend: PHP, MySQL
- AJAX: Fetch API is used for sending and receiving data asynchronously.

## Database
- Database Name: robotarm
- Table Name: poses
- Columns:
  - id (Primary Key, Auto Increment)
  - motor1 (INT)
  - motor2 (INT)
  - motor3 (INT)
  - motor4 (INT)
  - motor5 (INT)
  - motor6 (INT)
  - status (TINYINT, default 0)

## How to Run
1. Install XAMPP and start Apache & MySQL.
2. Create a database named robotarm and run the following SQL command:
```sql
CREATE TABLE poses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    motor1 INT,
    motor2 INT,
    motor3 INT,
    motor4 INT,
    motor5 INT,
    motor6 INT,
    status TINYINT DEFAULT 0
);
```
3. Place the project files in the htdocs folder of XAMPP.
4. Open your browser and navigate to:
http://localhost/project-folder/index.html

5. You can now:
 • Adjust motor sliders and save poses.
 • Toggle the status of poses using the Toggle button.
 • Reset all sliders to the default value of 90.
 • Data is stored in the MySQL table poses.

Requirements
 • XAMPP
 • Basic knowledge of HTML, CSS, JavaScript, PHP, MySQL.

Author
 • Razan Alharbi — Trainee @ Smart Methods
 • Student of IT — Qassim University

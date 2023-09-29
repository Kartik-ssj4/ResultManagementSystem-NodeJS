Project Setup Guide
Follow these steps to set up and run the project on your local machine.

Prerequisites
Node.js: Make sure you have Node.js installed on your system. You can download it from nodejs.org.
XAMPP: Install XAMPP for managing the MySQL database. You can download XAMPP from apachefriends.org.
Git (Optional): If you prefer version control, you can install Git from git-scm.com.
Installation and Setup
Clone the Repository:

git clone <repository-url>
If you don't have Git installed, you can download the repository as a ZIP file and extract it.

Navigate to the Project Directory:
cd <project-directory>


Install Dependencies:
npm install

Create MySQL Database:
Open XAMPP and create a new MySQL database named nodejs.


Update Configuration Files:
Update the .env and config.json files with your MySQL database configuration.
Database: MySQL
Username: root
Password: (leave it empty)
Host: localhost
Port: 3306

Run Migrations:
npx sequelize-cli db:migrate


Seed the Database:
npx sequelize db:seed:all


Running the Application
Start the Server:
nodemon start

Access the Application:
Open your browser or API client and go to:
http://localhost:3000

Teacher Credentials
Email: adminTeacher@gmail.com
Password: 12345678

Now you can log in to the application using the provided credentials and explore its features.

Feel free to reach out if you encounter any issues or have questions! Happy coding!






1. Run the command 'npm i' to insatll the packages.
2. Create the database with 'nodejs' as name.
3. After creating it setup the .env and config.json file according to your sytem. As I have used Xampp so the 
   username was root and password is empty database is mysql and it was running on port 3306. You can set it up         according to your system.
4. After successfully connecting the database now run the migration command 'npx sequelize-cli db:migrate'.
5  After migrations run the seed command to add the teacher 'npx sequelize db:seed:all'.
6. Teacher credentials are email=adminTeacher@gmail.com and password=12345678.
7. Run the command 'nodemon start' to start the server.
8. Now you can login into the application using the teacher's credentials. 
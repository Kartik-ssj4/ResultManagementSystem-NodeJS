import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import session from 'express-session'
import conn from './database/connection.js';

//========MiddleWares========//
import TeacherAuth from './Controllers/middlewares/teacherAuth.js';
//========MiddleWares========//


//========Routes========//
import homeRoute from './Routes/homeRoute.js'
import TeacherRoute from './Routes/teacherRoute.js';
import StudentRoute from './Routes/studentRoute.js'
//========Routes========//


const app = express();
const port = process.env.PORT || 3000; 
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static('Public', { maxAge: 2592000000 }));
app.use("/css",express.static("css"));
app.use("/img",express.static("img"));
app.use("/js",express.static("js"));

app.use(session({secret: process.env.ACCESS_TOKEN, resave: true, saveUninitialized: false,rolling: true, expires: new Date(Date.now() + (60*60*1000))}))
app.use(express.json({ limit: "10mb", extended: true }));

app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.use('/',homeRoute);
app.use('/teacher', TeacherAuth,TeacherRoute);
app.use('/student',StudentRoute);






// Test the database connection
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

conn
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  // Test the database connection

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

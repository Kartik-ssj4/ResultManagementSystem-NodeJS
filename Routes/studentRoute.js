import express from 'express';
import { dashboard } from '../Controllers/studentController.js';

const StudentRoute=express.Router();
StudentRoute.get("/dashboard", dashboard);


export default StudentRoute;
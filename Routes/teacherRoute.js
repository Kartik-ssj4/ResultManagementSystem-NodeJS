import express from 'express';
import { dashboard,deleteStudent,edit, editStudent, create, createStudent} from '../Controllers/teacherController.js';

const TeacherRoute = express.Router();
TeacherRoute.get('/dashboard', dashboard );
TeacherRoute.get('/student/create', create)
TeacherRoute.post('/student/create', createStudent)
TeacherRoute.get('/dashboard/student/:studentId/edit',edit)
TeacherRoute.post('/dashboard/student/:studentId/edit',editStudent)
TeacherRoute.get('/student/:studentId/delete',deleteStudent)



export default TeacherRoute;
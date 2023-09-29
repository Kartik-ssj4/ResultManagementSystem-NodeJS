
import Teacher from "../models/teacher.js"
import Student from "../models/student.js";
import bcrypt from 'bcrypt';

export const home=async (req,res) =>{
    res.render('Home/Homepage');
}

export const logout = async(req,res) => {

    req.session.student = undefined;
    req.session.teacher = undefined;
   setTimeout(()=> res.redirect("/"),800); 

}

export const login = async (req,res) => {
    if(req.body?.email){
        teacherLogin(req,res);
    }
    else
    {
        studentLogin(req,res);
    }
   
}


const teacherLogin = async (req,res) => {
    
    const data = await Teacher.scope('withPassword').findOne({ where: { email: req.body.email }, raw: true });
    if(!data) {
        res.render("Home/Homepage",{ viewData: { errors: {main: ["Invalid Credentials" ]}} });
        return ;
    }
    const compare = await bcrypt.compare(req.body.password, data.password);
    if(!compare){
        res.render("Home/Homepage",{ viewData: { errors: {main: ["Invalid Credentials" ] }} });
       return ;
    }
    else{
        req.session.teacher = data;
        
        setTimeout(() => res.redirect("/teacher/dashboard"), 1000);
        return ; 
    }
    
}

const studentLogin = async (req,res) => {
    
    const data = await Student.findOne({ where: { rollNo: req.body.rollNo, dob: new Date(req.body.dob) }, raw: true  });
    
    if(!data){
        res.render("Home/Homepage",{ viewData: { errors: {main: ["No Record Found" ] }} });
        return;
    }
    req.session.student = data;
    console.log(req.session);
    res.redirect("student/dashboard");

}
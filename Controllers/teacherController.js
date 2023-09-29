import Student from "../models/student.js";
import Teacher from "../models/teacher.js";


export const dashboard = async(req,res) => {

    req.query.size = req.query?.size ? Number(req.query.size) : 10;
    const offset = req.query?.page ? req.query.page * req.query.size : 0; 
    const data = await Student.findAll({ include:Teacher, limit: req.query.size, offset: offset });
    const count = await Student.count();

    res.render("Teacher/dashboard",{ studentData : { students: data, count: count, page: req.url } });
}

export const deleteStudent= async(req,res)=>
{
    await Student.destroy({ where: { id: req.params.studentId } });
    res.redirect("/teacher/dashboard");
}
export const edit = async(req,res) => {

    let data = await Student.findByPk(req.params.studentId);
    
    res.render("teacher/editStudent",{ viewData: { student: data, page: req.url } });
}

export const editStudent = async (req,res) => {
    

    Student.update({
        name: req.body.name,
        score: req.body.score,
        dob: new Date(req.body.dob)
    },{
        where: { id: req.params.studentId },
        raw: true
    }).then(async (student) => {
        let data = await Student.findByPk(req.params.studentId);

        res.render("teacher/editStudent",{ viewData: { student: data, page: req.url, success: { main: [ "Student record updated"] } } });


    }).catch(async err => {
        let data = await Student.findByPk(req.params.studentId);
        res.render("teacher/editStudent",{ viewData: { student: data, page: req.url, errors: { main: [ "Failed to update student record"] } } });
    })
}

export const create = async (req,res) => {

    res.render("teacher/create", { viewData: { page: req.url } });

}

export const createStudent = async (req,res) => {

    const unique = await Student.findOne({ where: { rollNo: req.body.rollNo }, raw: true });

    let field = {};
    field.errors = false;

    if(req.body.rollNo < 0){
        field.rollNo = "Roll No cant be negative";
        field.errors = true;
    }
    if(req.body.name.length < 3){
        field.name =  "Name is too small";
        field.errors = true;
    }
    if(req.body.dob){
        if(new Date(req.body.dob) >= new Date()){
            field.dob =  "DOB must be less than current date";
            field.errors = true;
        }
    }
    if(!req.body.dob){
        field.dob =  "DOB is required";
        field.errors = true;
    }

    if(req.body.score > 500 || req.body.score < 0){
        field.score =  "Score must be between 0 to 500";
        field.errors = true;
    }
    if(field.errors){
        res.render("teacher/create",{ viewData: { student: req.body, page: req.url, errors: { field: field} } });
        return ;
    }
    

    if(!unique){
        Student.create({
            name: req.body.name,
            rollNo: req.body.rollNo,
            score: req.body.score,
            teacherId: req.identity.id,
            dob: new Date(req.body.dob)
        });
        res.render("teacher/create", { viewData: { page: req.url, success: { main: [ "Student record created" ] } } })
        return ;
    }
    res.render("teacher/create", { viewData: { student:unique , page: req.url, errors: { main: [ "Student record already exists" ] } } });
}





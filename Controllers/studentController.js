import Student from '../models/student.js'

export const dashboard = async (req,res) => {
    const data = await Student.findOne({ where:{ id: req.session.student.id }, raw: true });
    console.log(data);
 setTimeout(()=>   res.render("Student/dashboard",{ studentData: { student: data } }),800);
}

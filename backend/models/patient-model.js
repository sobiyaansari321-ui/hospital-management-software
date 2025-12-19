import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    Name : String ,
    Age : Number ,
    Gender : String ,
    BloodGroup : String ,
    Email : String ,
    PhoneNumber : Number 
})

const PatientModel = mongoose.model("Patients", PatientSchema)

export default PatientModel;
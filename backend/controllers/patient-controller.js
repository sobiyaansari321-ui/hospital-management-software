import PatientModel from "../models/patient-model.js"

let getAllPatients = async (req,res)=> {
    try {
        let patients = await PatientModel.find({});
        res.json({
            success : true ,
            message : "Patients data is retrieved successfully!",
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to retrieve data..."
        })
    }
}

let AddPatients = async (req,res)=>{
    let { Name , Age , Gender , BloodGroup , Email , PhoneNumber } = req.body;
    try {
        await PatientModel.create({
            Name , Age , Gender , BloodGroup , Email , PhoneNumber ,
        })
            res.json({
                success: true ,
                message: "New patient added successfully!"
            })
    }
    catch(error){
        res.json({
            success: false,
            message: "Failed to add new patient..."
        })
    }
}

let EditPatients = async (req,res) => {
    let { Name , Age , Gender , BloodGroup , Email , PhoneNumber } = req.body;
    try {
        await PatientModel.findByIdAndUpdate( id , {
            Name , Age , Gender , BloodGroup , Email , PhoneNumber
        })
        res.json({
            success: true ,
            message: "Patient data updated successfully!"
        })
    }
    catch(error){
        res.json({
            success: false ,
            message: "Failed to update patient's data..."
        })
    }
}

let DeletePatients = async (req,res) =>{
    let { Name , Age , Gender , BloodGroup , Email , PhoneNumber } = req.body;
    try {
        await PatientModel.findByIdAndDelete( id , {
            Name , Age , Gender , BloodGroup , Email , PhoneNumber 
        })
        res.json({
            success: true ,
            message: "Patient data deleted successfully!"
        })
    }
    catch(error){
        res.json({
            success: false ,
            message: "Failed to delete patient's data..."
        })
    }
}

export { getAllPatients , AddPatients , EditPatients , DeletePatients }
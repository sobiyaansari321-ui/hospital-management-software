import PatientModel from "../models/patient-model.js"

let getAllPatients = async (req,res)=> {
    try {
        let patients = await PatientModel.find({});

        res.json({
            success : true ,
            message : "Patients data is retrieved successfully!"
        });
    } catch (error) {
        console.log(error)
    }
}

export { getAllPatients }
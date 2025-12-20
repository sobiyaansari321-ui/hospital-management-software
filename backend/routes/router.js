import express from "express";

import { Router } from "react-router-dom";
import { AddPatients, 
         DeletePatients, 
         EditPatients, 
         getAllPatients } from "../controllers/patient-controller.js";

let router = express.Router()

router.get('/patients', getAllPatients)
router.post('/add-patient', AddPatients)
router.put('/edit-patient', EditPatients)
router.delete('/delete-patient', DeletePatients)

export default router;
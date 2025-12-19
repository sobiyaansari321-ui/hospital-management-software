import { Router } from "react-router-dom";
import { getAllPatients } from "../controllers/patient-controller.js";

let router = express.Router()

router.get('/patients', getAllPatients)

export defa
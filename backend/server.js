import express from 'express'
import dotenv from 'dotenv' 
dotenv.config();

import connectDB from './connectDB.js'
import { AddPatients, DeletePatients, EditPatients, getAllPatients } from './controllers/patient-controller.js';
import router from './routes/router.js';

const server = express()

const port = process.env.PORT || 8000
const connection = process.env.DATABASE_URL

connectDB(connection)

server.get('/', (req, res) => {
  res.send('<h1> Welcome to Backend!</h1>')
})

server.use('/api', router)

server.listen(port,  () => {
  console.log(`Your server is running at port http://localhost:${port}`)
})

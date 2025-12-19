import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './connectDB.js'
import { getAllPatients } from './controllers/patient-controller.js';

const server = express()

const port = process.env.PORT || 8000
const connection = process.env.DATABASE_URL

connectDB(connection)

server.get('/', (req, res) => {
  res.send('<h1> Welcome to Backend!</h1>')
})
getAllPatients()

server.listen(port,  () => {
  console.log(`Your server is running at port http://localhost:${port}`)
})

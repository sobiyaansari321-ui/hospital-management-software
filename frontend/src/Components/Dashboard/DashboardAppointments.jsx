import React from 'react'
import { IoPerson } from "react-icons/io5";

const DashboardAppointments = () => {
  return (
    <div className='table-box w-75 h-54 shadow-lg rounded m-4 p-3'>
      <div className='bold'>Appointments</div>
      <div >
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Date</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Doctor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">10.00 AM</th>
      <td>09/01/2025</td>
      <td><IoPerson size={20} /> Sunil</td>
      <td>Dr. Mehta</td>
    </tr>
    <tr>
      <th scope="row">11.00 AM</th>
      <td>24/03/2025</td>
      <td><IoPerson size={20} /> Khushi</td>
      <td>Dr. Mehta</td>
    </tr>
    <tr>
      <th scope="row">10.00 AM</th>
      <td>22/05/2025</td>
      <td><IoPerson size={20} /> Aadi</td>
      <td>Dr. Sarah</td>
    </tr>
    <tr>
      <th scope="row">10.00 AM</th>
      <td>25/06/2025</td>
      <td><IoPerson size={20} /> John</td>
      <td>Dr. Mehta</td>
    </tr>
    <tr>
      <th scope="row">11.00 AM</th>
      <td>30/08/2025</td>
      <td><IoPerson size={20} /> Zoya</td>
      <td>Dr. Sarah</td>
    </tr>
   
  </tbody>
</table>
      </div>
    </div>
  )
}

export default DashboardAppointments

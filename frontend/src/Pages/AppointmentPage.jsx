import React, { useState } from 'react'
import Layout from '../Components/Common/Layout.jsx'

import { IoSearchOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import NewAppointmentForm from '../Components/NewForms/NewAppointmentForm.jsx';



const AppointmentPage = () => {
  const [ showAppointmentForm , setShowAppointmentForm ] = useState(false)
  return (
    <div>
      <Layout title='Appointments'>

        <div className='app-box shadow-lg rounded'>

          <div className='d-flex justify-content-between align-items-center'>

          <div className='headings d-flex'>
            <div>New Appointments</div>
            <div style={{marginLeft:'50px'}}>Completed Appointments</div>
          </div>
          <div className='m-4'>
              <button className='btn btn-primary app-btn ' 
              onClick={()=>{setShowAppointmentForm(true)}} >
                <FaPlus /> New Appointment</button>
          </div>
          </div>
          <hr />

          <div className='d-flex justify-content-between  align-items-center ' style={{width:'50%',height:'8%',borderStyle:'hidden',marginLeft:'50px'}}>
            
            <div className='search d-flex justify-content-center align-items-center ' style={{height:'80%',width:'40%'}}>
                        
              <div><IoSearchOutline size={40} style={{marginRight:'8px'}}/></div>
                <input className='input-field'
                       type="text"  
                       placeholder='Search'
                       style={{}}
                />
            
              </div>
            
              <div className='date d-flex justify-content-center align-items-center ' style={{height:'80%',width:'40%'}}>
                        
                <div><SlCalender size={30} style={{marginRight:'10px'}}/></div>
                  <input className='date-field'
                         type="Date"  
                         placeholder=''
                         style={{}}
                  />
            
                </div>
            
          </div>
          
          <div>
            <table class="table table-hover mt-5 text-center app-table">
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Date</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Age</th>
      <th scope="col">Doctor</th>
      <th scope="col">User Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>

    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>

    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>

    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>

    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>

    <tr>
      <td>10.30 AM</td>
      <td>06/12/2026</td>
      <td>
        <img className='app-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiF96dKTOvN0Ai2EJU-EPXQl6vTQCXB209g&s" alt="" />
        Keshaw Fernandez
      </td>
      <td>32</td>
      <td>Dr. John</td>
      <td className='app-cross'>Reschedule <ImCross style={{marginLeft:'10px'}} className='cross '/></td>
    </tr>
    
  </tbody>
</table>
          </div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end m-5" style={{fontSize:'25px'}}>
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>

        {showAppointmentForm && (
    <NewAppointmentForm onClose={() => setShowAppointmentForm(false)} />
        )}
      </Layout>
    </div>
  )
}

export default AppointmentPage

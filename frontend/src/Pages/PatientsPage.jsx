import React from 'react'
import Layout from '../Components/Common/Layout.jsx'
import { useState } from 'react';
import NewPatientForm from '../Components/NewForms/NewPatientForm.jsx';
// icons
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosText } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { BsInfoLg } from "react-icons/bs";


const PatientsPage = () => {
  const [ showPatientForm , setShowPatientForm ] = useState(false)
  return (
    <div>
      <Layout title='Patient Deatails' >

        <div className='patient-box shadow-lg rounded'>

          <div className='d-flex justify-content-between align-items-center m-5 mb-4 pt-4 '>

          <div className='p-info'>Patient Info</div>
          <button className='btn btn-primary pp-btn pp-btn '
           onClick={()=>{setShowPatientForm(true)}}>
             <FaPlus /> New Patient
          </button>

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

          <hr />



          <div className='p-table'>

          <table class="table table-hover text-center " style={{overflowX:"auto",overflowY:"auto"}}>
  <thead>
    <tr>
      <th scope="col">Patient Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Blood-Group</th>
      <th scope="col">Phone Number</th>
      <th scope="col">E-mail ID</th>
      <th scope="col">User Action</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    <tr>
      <td>
        <img className='p-profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas_neLoKe1CVCzDMF6L0Q1uXZxsT61Th_iQ&s" alt="" />
        John Polson
        </td>
      <td>25</td>
      <td>Male</td>
      <td>B +ve</td>
      <td>123-456-7890</td>
      <td>abcxyz@gmail.com</td>
      <td className='d-flex justify-content-between align-items-center ' style={{height:'15%',width:'35%',borderStyle:"none" , marginLeft:'83px'}}>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><IoIosText className='msg'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><ImCross className='cross'/></button>
        <button style={{borderStyle:'none', backgroundColor:'white',paddingRight:'5px'}}><BsInfoLg className='info'/></button>
      </td>
    </tr>

    

  </tbody>
</table>

          </div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end" style={{fontSize:'25px'}}>
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

        {showPatientForm && (
    <NewPatientForm onClose={() => setShowPatientForm(false)} />
        )}

      </Layout>
    </div>
  )
}

export default PatientsPage

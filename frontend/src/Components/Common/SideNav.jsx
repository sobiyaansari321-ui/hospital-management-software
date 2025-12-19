import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSolidClinic } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { BsChatLeftTextFill } from "react-icons/bs";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaBookMedical } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";


const SideNav = () => {
  return (
    <div className=' sidenav-box'>
      
      <div className='heading d-flex align-items-center p-4'>< BiSolidClinic size={60}/><span>JHC Clinic</span></div>
      
      <ul style={{listStyleType:'none'}}>

        <li className='sidenav-li'>
          <NavLink to='/dashboard'>
          <div className='m-4'>
            <IoSpeedometer size={30}/>{' '}
            Dashboard
          </div>
          </NavLink>
        </li>

        <li className='sidenav-li'>
          <NavLink to={'/patients'}>
            <div className='m-4'>
              <IoPeople size={30}/>{' '}
              Patients
            </div>
          </NavLink>
        </li>

        <li className='sidenav-li'>
          <NavLink to={'/appointments'}>
          <div className='m-4'>
          <IoDocumentText size={30} />{' '}
          Appointments
          </div>
          </NavLink>
        </li>

         <li className='sidenav-li'>
          <NavLink to={'/doctors'}>
            <div className='m-4'>
              <FaUserDoctor size={30}/>{' '}
              Doctors
            </div>
          </NavLink>
        </li>

         <li className='sidenav-li'>
          <NavLink to={'/messeges'}>
            <div className='m-4'>
              <BsChatLeftTextFill size={30}/>{' '}
              Messeges
            </div>
          </NavLink>
        </li>

         <li className='sidenav-li'>
          <NavLink to={'/education'}>
            <div className='m-4'>
              <HiMiniBuildingOffice size={30}/>{' '}
              Education Content
            </div>
          </NavLink>
        </li>

         <li className='sidenav-li'>
          <NavLink to={'/medicines'}>
            <div className='m-4'>
              <FaBookMedical size={30}/>{' '}
              Medicine Inventory
            </div>
          </NavLink>
        </li>

         <li className='sidenav-li'>
          <NavLink to={'/settings'}>
            <div className='m-4'>
              <IoSettings size={30}/>{' '}
              Settings
            </div>
          </NavLink>
        </li>

      </ul>

      <Link to='/'>
      <button className='sidenav-btn btn btn-danger'>
        <MdOutlineLogout /> LogOut
      </button>
      </Link>

    </div>
  )
}

export default SideNav
import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { GiTestTubes } from "react-icons/gi";

const ActivityOverView = () => {
  return (
    <div className=' w-25  rounded shadow-lg overview-box m-4'>

      <div className='d-flex justify-content-between align-items-center  rounded mt-0 m-3 '>
        <div className='bold'>Activity Overview</div>
      <div className="btn-group">
  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Select
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Daily</a></li>
    <li><a className="dropdown-item" href="#">Weekly</a></li>
    <li><a className="dropdown-item" href="#">Monthly</a></li>
    <li><a className="dropdown-item" href="#">Yearly</a></li>
  </ul>
</div>
    </div>


      <div className='boxes  '>
        <div className='d-flex justify-content-center text-align-center'>

        <div className='container1 '>
            <IoDocumentText size={30} />
        <div>{100}</div>
        Appointments
        </div>

        <div className='container2'>
            <IoPeople size={30} />
            <div>{50}</div>
            New Patients
            </div>

      </div>

      <div className='d-flex justify-content-center text-align-center'>

        <div className='container3'>
            <RiMedicineBottleFill size={30} />
            <div>{500}</div>
            Medicines Sold
        </div>

        <div className='container4'>
            <GiTestTubes size={30} />
            <div>{100}</div>
            Lab Tests
        </div>

      </div>
      </div>

    </div>
  )
}

export default ActivityOverView

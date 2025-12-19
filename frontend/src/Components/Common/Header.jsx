import React from 'react'
import { TbBellRingingFilled } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";


const Header = ({title}) => {
  return (
    <div className='d-flex justify-content-between align-items-center m-4'>

      <h1 className=''>{title}</h1>

      <div className='d-flex align-items-center '>

        <div >
            <TbBellRingingFilled size={30} className='m-3' /> 
            <IoPersonCircleSharp size={40} />
        </div>

        <div className='p-1'>Sobiya Ansari <br />Admin</div>
        
      </div>

    </div>
  )
}

export default Header

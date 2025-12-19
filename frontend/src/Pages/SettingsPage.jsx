import React from 'react'
import Layout from '../Components/Common/Layout'

import { MdOutlineManageAccounts } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlLock } from "react-icons/sl";
import { RiBrushAiLine } from "react-icons/ri";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


const SettingsPage = () => {
  return (
    <Layout title='Settings'>
      
      <div className="sett-box rounded shadow-lg">

        <div className='sett-h'>Settings</div>

        <div>
          <ul style={{listStyle:'none'}}>

            <li className='d-flex'>
              <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <MdOutlineManageAccounts size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Account 
                </div>
                <div className='sett1-content '>
                  Manage personal information and login credentials
                </div>
              </div>

                <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <IoIosNotificationsOutline size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Notifications 
                </div>
                <div className='sett2-content '>
                  Control reminders and hospital alerts
                </div>
              </div>
            </li>

            <li className='d-flex'>
              <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <SlLock size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Security and Privacy 
                </div>
                <div className='sett1-content '>
                  Keep your account secure
                </div>
              </div>

                <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <RiBrushAiLine size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Appearance 
                </div>
                <div className='sett2-content '>
                  Theme and accessibility settings
                </div>
              </div>
            </li>

             <li className='d-flex'>
              <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <MdOutlineCloudUpload size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Backup and Data 
                </div>
                <div className='sett1-content '>
                  Export or restore data
                </div>
              </div>

                <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <RiBillLine size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Billing 
                </div>
                <div className='sett2-content '>
                  Payment methods and invoice settings
                </div>
              </div>
            </li>

             <li className='d-flex'>
              <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <IoMdHelpCircleOutline size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                Help and Support
                </div>
                <div className='sett1-content '>
                  Get assistance anytime 
                </div>
              </div>

                <div className='sett-1-2 rounded'>

                <div className='sett1'>
                  <IoIosInformationCircleOutline size={35} style={{marginRight:'15px',marginLeft:'10px'}}/> 
                About 
                </div>
                <div className='sett2-content '>
                  App version and policies
                </div>
              </div>
            </li>

          </ul>
        </div>

        <nav aria-label="Page navigation example ">
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
    </Layout>
  )
}

export default SettingsPage

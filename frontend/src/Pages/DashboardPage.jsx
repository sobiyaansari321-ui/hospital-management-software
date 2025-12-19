import React from 'react'
import ActivityOverView from '../Components/Dashboard/ActivityOverView'
import DashboardAppointments from '../Components/Dashboard/DashboardAppointments'
import DashboardEducationContent from '../Components/Dashboard/DashboardEducationContent'
import DashboardPatientFee from '../Components/Dashboard/DashboardPatientFee'
import MedicineGraph from '../Components/Dashboard/MedicineGraph'
import Layout from '../Components/Common/Layout'

const DashboardPage = () => {
  return (
    <div >

    <Layout title='Dashboard'>
      <div className='d-flex'>
      <ActivityOverView />
      <DashboardAppointments />
      </div>
      <div className='d-flex justify-content-between'>
      <DashboardEducationContent />
      <MedicineGraph />
      <DashboardPatientFee />
      </div>
    </Layout>
      
    </div>
  )
}

export default DashboardPage

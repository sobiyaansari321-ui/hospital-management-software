import React from 'react'
import LoginPage from './Pages/LoginPage.jsx'
import './App.css'
import DashboardPage from './Pages/DashboardPage.jsx'
import SideNav from './Components/Common/SideNav.jsx'
import Header from './Components/Common/Header.jsx'
import Layout from './Components/Common/Layout.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import AppointmentPage from './Pages/AppointmentPage.jsx'
import DoctorsPage from './Pages/DoctorsPage.jsx'
import EducationContentPage from './Pages/EducationContentPage.jsx'
import MedicineInventoryPage from './Pages/MedicineInventoryPage.jsx'
import MessegesPage from './Pages/MessegesPage.jsx'
import PatientsPage from './Pages/PatientsPage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<DashboardPage />}/>
      <Route path='/appointments' element={<AppointmentPage />}/>
      <Route path='/doctors' element={<DoctorsPage />}/>
      <Route path='/education' element={<EducationContentPage />}/>
      <Route path='/medicines' element={<MedicineInventoryPage />}/>
      <Route path='/messeges' element={<MessegesPage />}/>
      <Route path='/patients' element={<PatientsPage />}/>
      <Route path='/settings' element={<SettingsPage />}/>

    </Routes>
  )
}

export default App

// test change by Sobiya
// git finally working 😄

import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default MainLayout

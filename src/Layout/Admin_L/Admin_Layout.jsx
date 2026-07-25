import React from 'react'
import { Outlet } from 'react-router-dom'
import Admin_Header from './Admin_Header'
import Admin_Footer from './Admin_Footer'

const Admin_Layout = () => {
  return (
    <>
      <Admin_Header />
      <Outlet />
      <Admin_Footer />
    </>
  )
}

export default Admin_Layout

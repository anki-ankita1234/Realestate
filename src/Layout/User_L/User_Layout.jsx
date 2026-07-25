import React from 'react'

import { Outlet } from 'react-router-dom'
import User_Header from './User_Header'
import User_Footer from './User_Footer'

const User_Layout = () => {
  return (
    <>
    <User_Header/>
    <Outlet/>
    <User_Footer/>
    </>
  )
}

export default User_Layout

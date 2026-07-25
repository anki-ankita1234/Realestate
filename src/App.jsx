import React from 'react'
import Home from './Components/User/Home'
import About from './Components/User/About'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User_Layout from './Layout/User_L/User_Layout'
import Contact from './Components/User/Contact'
import Login from './Components/User/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Admin_Layout from './Layout/Admin_L/Admin_Layout'
import Admin_Home from './Components/Admin/Admin_Home'
import Add_Category from './Components/Admin/Admin _pages/Add_Category'
import Manage_Category from './Components/Admin/Admin _pages/Manage_Category'
import Update_Category from './Components/Admin/Admin _pages/Update_Category'

const App = () => {

  return (

    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<User_Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Route>

          {/* Admin Routes */}
          <Route path='/admin' element={<Admin_Layout />}>
            <Route path='/admin' element={<Admin_Home />}></Route>
            <Route path='/admin/add-category' element={<Add_Category />}></Route>
            <Route path='/admin/manage-category' element={<Manage_Category />}></Route>
            <Route path='/admin/update-category/:id' element={<Update_Category />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <h1>Hlo</h1> */}

    </>

  )

}

export default App

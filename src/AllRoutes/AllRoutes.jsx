import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
    </Routes>
  )
}

export default AllRoutes
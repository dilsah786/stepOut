import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Register from '../Auth/register'
import Login from '../Auth/login'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={ <PrivateRoute> <HomePage/> </PrivateRoute> } />
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
       
    </Routes>
  )
}

export default AllRoutes
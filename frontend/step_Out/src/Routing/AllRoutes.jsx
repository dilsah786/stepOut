import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Register from '../Auth/register'
import Login from '../Auth/login'
import PrivateRoute from './PrivateRoute'
import AddNewTrain from '../pages/AddNewTrain'

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={ <PrivateRoute> <HomePage/> </PrivateRoute> } />
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/admin/train' element={<PrivateRoute><AddNewTrain/></PrivateRoute>}/>
       
    </Routes>
  )
}

export default AllRoutes
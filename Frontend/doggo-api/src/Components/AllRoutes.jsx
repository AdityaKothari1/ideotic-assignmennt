

import React from 'react'
import { Home } from './Breedlist'
import {Route,Routes} from "react-router-dom"
import { Puppy } from './Puppy'
import { Search } from './Search'
import { Signup } from './Signup'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
export const AllRoutes = () => {
  const isAuth=localStorage.getItem("isAuth")
  console.log(isAuth);
  return (
    <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/puppy" element={
            <Puppy/>
        
        } />
        <Route path="/search" element={<Search/>} />
    </Routes>
  )
}
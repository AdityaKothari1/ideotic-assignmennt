

import React from 'react'
import { Home } from './Breedlist'
import {Route,Routes} from "react-router-dom"
import { Puppy } from './Puppy'
import { Search } from './Search'
import { Signup } from './Signup'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/puppy" element={
          <PrivateRoute>
            <Puppy/>
          </PrivateRoute>
        } />
        <Route path="/search" element={
          <PrivateRoute>
            <Search/>
          </PrivateRoute>
        } />
    </Routes>
  )
}

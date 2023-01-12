

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./navbar.module.css"
import {FcSearch} from "react-icons/fc"
const Navbar = () => {
  const navigate=useNavigate()
  const handleAuth=()=>{
    localStorage.removeItem("isAuth")
    navigate("/home")
  }
  return (
    <div className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/puppy">Puppy Page</Link>
        <Link to="/search"><FcSearch size={30}/></Link>
        <button onClick={handleAuth} className={styles.btn}>Logout</button>
    </div>
  )
}

export default Navbar
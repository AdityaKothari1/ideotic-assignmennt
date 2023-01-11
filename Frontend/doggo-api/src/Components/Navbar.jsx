

import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
const Navbar = () => {
  const handleAuth=()=>{
    // localStorage.setItem("isAuth",false)
    // window.location.reload()
  }
  return (
    <div className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/puppy">Puppy Page</Link>
        <Link to="/search">Search Breed</Link>
        <button onClick={handleAuth} className={styles.btn}>Logout</button>
    </div>
  )
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import styles from "./user.module.css"
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
   
    const navigate=useNavigate()
    const handleSignup=()=>{
        if(name&&password&&email){
            const payload={
                name:name,
                email:email,
                password:password,
            }
            axios.post("http://localhost:8000/signup",payload).then((res)=>{
        
        if(res){
            if(res.data.msg=="signup sucess"){
                alert(`${res.data.msg}`);
                navigate("/login")
            }
            else{
                alert(`${res.data.msg}`);
            }
        }
      
       })
        }else{
            alert('Fill All Details');
        }
        
     
       
    }
  return (
    <div className={styles.user} >
    <h2>Signup</h2>
        <input type="text" placeholder='UserName' value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" placeholder='Email'value={email} onChange={e=>setEmail(e.target.value)}  />
        <input type="text" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
        
         <button onClick={handleSignup}>Signup</button>
    </div>

  )
}

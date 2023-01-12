


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Breedlist.module.css"
const getData=async()=>{
    let res=await fetch("https://dog.ceo/api/breeds/list/all")
    let data=await res.json()
    return data
}
export const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        getData().then((res)=>{
        let x=Object.keys(res.message)
          setData(x)
        })
    },[])
    const handleData=(data)=>{
        localStorage.setItem("beard",data)
    }
  
  return (<>
    <h1 className={styles.head}>List Of All Breeds</h1>
  <div className={styles.list}>
       {data.map((ele,i)=>{
        return <div  key={i}>
           <li  onClick={()=>handleData(ele)}><Link to={"/puppy"}>{ele}</Link></li>
       
            </div>
       })}
    </div>
    </>
  )
}

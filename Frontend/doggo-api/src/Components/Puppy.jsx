

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./puppy.module.css"
export const Puppy = () => {
    const [data,setData]=useState([])
     let val=localStorage.getItem("beard",data)
     console.log(val);
    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${val}/images`).then((res)=>{
            setData(res.data.message)
        })
    },[])
    return (<>
    <h1>Images of Your Selected Breed</h1>
    <div className={styles.breed}>
    {data.map((ele,i)=>{
        return <img key={i} src={ele} alt="" />
    })}
    </div>
    </>
  )
}

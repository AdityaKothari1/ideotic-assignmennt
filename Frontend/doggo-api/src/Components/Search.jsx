

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./search.module.css"
export const Search = () => {
    const [val,setValue]=useState("")
    const [data,setData]=useState([])
 
    const handleSearch=()=>{
        axios.get(`https://dog.ceo/api/breed/${val}/images`).then((res)=>{
            // console.log(res.data.message)
            setData(res.data.message)
        })
    }
  return (<> 
  <h1>Search For Any Breed</h1>
    <div className={styles.inputs}>
        <input type="text" placeholder='Breed Name' value={val} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
    </div>
    <div className={styles.search}>
    {data.map((ele,i)=>{
        return <img key={i} src={ele} alt="" />
    })}
    </div>
    </>
  )
}

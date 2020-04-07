import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'

const Request=({match})=>{
    const GetRequests=()=>{
        let formData=new FormData()
        formData.append('uid',match.params.uid)
        axios.post("https://onthegoo.000webhostapp.com/Appointment/Requests.php",formData)
        .then(res=>{
            setData(res.data)
            console.log(res.data)
            setIsLoading(false)
        })
    }
    useEffect(()=>{  
        GetRequests()
    },[])    
const [data,setData]=useState()
const [isLoading,setIsLoading]=useState(true)
    return(
        <div className="screen">
            <h1 className="heading">Book it</h1>
            {data&&data.map((x,key)=>
                <div key={key} style={{minHeight:100}} className="form">
                    <p>{x.username}</p>
                    <button className="mainbtn">Approve</button>
                </div>
            )}
        </div>
    )
}

export default Request
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'

const StoreList=()=>{
    const [data,setData]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const [prompt,setPrompt]=useState(false)
    
    const GetStores=()=>{
        axios.get("https://onthegoo.000webhostapp.com/Appointment/StoreList.php")
        .then(res=>{
            setData(res.data)
            console.log(res.data)
            setIsLoading(false)
        })
    }
    useEffect(()=>{  
        if(sessionStorage.getItem(`uid`)!=null)
            GetStores()
    },[])
    return(
        <div style={{width:"100%"}}>
            {prompt?
            <div className="logoutprompt">
                <p>Confirm Logout</p>
                <Link to='/userlogin'><button onClick={sessionStorage.clear()}>Yes</button></Link>
                <button onClick={()=>setPrompt(false)}>No</button>
            </div>:<></>}
            <div className="screen" style={!prompt?{overflow:"scroll"}:{filter:"blur(5px)"}}>
                <button className="logoutbtn" onClick={()=>setPrompt(true)}>Logout</button>
                <h1 className="heading">Book it</h1>
                <div style={{marginBottom:60}}>
                {!isLoading?data.map((x,key)=>
                    <div className="form" key={key}>
                        <h1>{x.storename}</h1>
                        <h3>{x.username}</h3>
                        <p>{x.storedescription}</p>
                        <button className="mainbtn">Book Now</button>
                        </div>):
                        <h1 style={{textAlign:"center",color:"white"}}>Loading...</h1>}
                        {sessionStorage.getItem(`uid`)==null?<div>
                            <h3 style={{textAlign:"center",color:"white"}}>Not Logged in</h3>
                            <Link to='/userlogin' ><button className="backbtn">Go Back</button></Link>
                            </div>:<></>}
                </div>
            </div>
        </div>
    )
}

export default StoreList
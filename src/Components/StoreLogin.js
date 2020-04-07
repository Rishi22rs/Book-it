import React,{useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import '../Stylesheets/Userlogin.css'
import Arrow from '../Assets/arrow.png'

const StoreLogin=()=>{
    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')
    const [wrongPass,setWrongPass]=useState(false)
    const [redirect,setRedirect]=useState(false)
    const [data,setData]=useState('')

    const InsertData=()=>{
        let formData=new FormData()
        formData.append('username',username)
        formData.append('password',pass)
        axios.post('https://onthegoo.000webhostapp.com/Appointment/StoreLogin.php',formData)
        .then(res=>{
            console.log(res)
            if(res.data.uid==="-1")
                setWrongPass(true)
            else {
                setData(res.data.uid)
                setRedirect(true)
            }
        })
    }
    
    const ClickHandler=(e)=>{
        e.preventDefault()
        InsertData()
    }

    if(redirect)
        return<Redirect to={`/requests/${data}`} />

    return(
        <div className="screen">
            <Link to="/storehome" style={{textDecoration:"none"}}><h1 className="heading">Book it</h1></Link>  
            <form className="form">
                <h2 className="head">Store Login</h2>
                <input style={wrongPass?{borderBottom:"1px solid red"}:{}} type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <label>Username</label>
                <input style={wrongPass?{borderBottom:"1px solid red"}:{}} type="password" onChange={(e)=>setPass(e.target.value)}/>
                <label>Password</label>
                <button className="btn" onClick={ClickHandler}><img src={Arrow} alt="login"></img></button>
            </form>
            {wrongPass?<p className="cred">*Wrong credentials</p>:<p>  </p>}
            <p className="signuplink">Don't have an account?<Link style={{color:"white"}} to='/storesignup'> Sign up</Link></p>
        </div>
    )
}

export default StoreLogin
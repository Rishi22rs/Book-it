import React,{useState} from 'react'
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios'
import '../Stylesheets/Userlogin.css'
import Arrow from '../Assets/arrow.png'

const UserLogin=()=>{
    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')
    const [email,setEmail]=useState('')
    const [conPass,setConPass]=useState('')
    const [wrongPass,setWrongPass]=useState('')
    const [prompt,setPrompt]=useState(false)

    const InsertData=()=>{
        let formData=new FormData()
        formData.append('username',username)
        formData.append('email',email)
        formData.append('password',pass)
        axios.post('https://onthegoo.000webhostapp.com/Appointment/UserSignup.php',formData)
        .then(res=>{
            if(res.data.x=="Created")setPrompt(true)
        })
    }
    
    const ClickHandler=(e)=>{
        e.preventDefault()
        if(pass!==conPass)
            setWrongPass(true)
        else
            InsertData()
    }

    return(
        <>
        {prompt?
        <div className="logoutprompt">
        <p>Signed up </p>
        <Link to='/userlogin'><button onClick={sessionStorage.clear()}>Go Login</button></Link>
        </div>:<></>}
        <div className="screen" style={prompt?{filter:"blur(5px)"}:{}}>
            <Link to="/" style={{textDecoration:"none"}}><h1 className="heading">Book it</h1></Link>
            <form className="form" style={{height:435}}>
                <h2 className="head">User Sign up</h2>
                <input type="text" name="username" onChange={e=>setUsername(e.target.value)}/>
                <label className="user">Username</label>
                <input type="email"  name="email" onChange={e=>setEmail(e.target.value)} />
                <label className="email">Email</label>
                <input type="password" name="conpassword" style={wrongPass?{borderBottom:"1px solid red"}:{}} onChange={e=>setConPass(e.target.value)}/>
                <label className="conpass">Confirm Password</label>
                <input type="password" name="password" onChange={e=>setPass(e.target.value)} style={wrongPass?{borderBottom:"1px solid red"}:{}}/>
                <label className="pass">Password</label>
                <button className="btn" onClick={ClickHandler}><img src={Arrow} alt="Login"></img></button>
            </form>
            {wrongPass?<p className="cred">*Password don't match</p>:<h1></h1>}
            <p style={{marginTop:"-10px"}} className="signuplink">Already have an account?<Link style={{color:"white"}} to='/userlogin'> Login</Link></p>
        </div>
        </>
    )
}

export default UserLogin
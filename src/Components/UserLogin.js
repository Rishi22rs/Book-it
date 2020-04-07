import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'
import '../Stylesheets/Userlogin.css'
import Arrow from '../Assets/arrow.png'

const UserLogin=()=>{
    const [data,setData]=useState('')
    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')
    const [redirect,setRedirect]=useState(-1)

    const InsertData=()=>{
        let formData=new FormData()
        formData.append('username',username)
        formData.append('password',pass)
        axios.post('https://onthegoo.000webhostapp.com/Appointment/UserLogin.php',formData)
        .then((res)=>{
            if(res.data.uid!=="-1"){
                setData(res.data)
                sessionStorage.setItem(`uid`,res.data.uid)               
                setRedirect(1)
            }
            else
                setRedirect(0)
        })
    }
    
    const ClickHandler=(e)=>{
        e.preventDefault()
        InsertData()
    }
    if(redirect===1||sessionStorage.getItem(`uid`)!=null)
        return(<Redirect to={`/Storelist/${sessionStorage.getItem(`uid`)}`} />)

    return(
        <div className="screen">
            <Link to="/" style={{textDecoration:"none"}}><h1 className="heading">Book it</h1></Link>
            <form className="form">
                <h2 className="head">User Login</h2>
                <input style={!redirect?{borderBottom:"1px solid red"}:{}} className="userF" type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <label className="user">Username</label>
                <input style={!redirect?{borderBottom:"1px solid red"}:{}} className="passF" type="password" onChange={(e)=>setPass(e.target.value)}/>
                <label className="pass">Password</label>
                <button className="btn" onClick={ClickHandler}><img src={Arrow} alt="Login"></img></button>
            </form>
            {redirect===0?<p className="cred">*Wrong credentials</p>:<p>  </p>}
            <p className="signuplink">Don't have an account?<Link style={{color:"white"}} to='/usersignup'> Sign up</Link></p>
        </div>
    )
}

export default UserLogin
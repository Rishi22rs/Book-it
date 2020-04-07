import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Arrow from '../Assets/arrow.png'

const StoreSignup=()=>{
    const [username,setUsername]=useState('')
    const [storename,setStorename]=useState('')
    const [storedescription,setStoredescription]=useState('')
    const [pass,setPass]=useState('')
    const [email,setEmail]=useState('')
    const [conPass,setConPass]=useState('')
    const [wrongPass,setWrongPass]=useState('')
    const [prompt,setPrompt]=useState(false)

    const InsertData=()=>{
        let formData=new FormData()
        formData.append('username',username)
        formData.append('storename',storename)
        formData.append('storedescription',storedescription)
        formData.append('email',email)
        formData.append('password',pass)
        axios.post('https://onthegoo.000webhostapp.com/Appointment/StoreSignup.php',formData)
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
        <Link to='/storelogin'><button onClick={sessionStorage.clear()}>Go Login</button></Link>
        </div>:<></>}
        <div className="screen" style={prompt?{overflow:"scroll",filter:"blur(5px)"}:{}}>
            <Link to="/storehome" style={{textDecoration:"none",position:"fixed",marginLeft:"35%"}}><h1 className="heading">Book it</h1></Link>
            <form className="form" style={{height:650,marginTop:100}}>
                <h2 style={{textAlign:"center"}}>Store Signup</h2>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
                <label>Username</label>
                <input type="text" onChange={e=>setStorename(e.target.value)}/>
                <label>Store name</label>
                <textarea className="desc" type="text" onChange={e=>setStoredescription(e.target.value)}></textarea>
                <label className="descL">Store description</label>
                <input type="email" onChange={e=>setEmail(e.target.value)} />
                <label>Email</label>
                <input type="password" onChange={e=>setConPass(e.target.value)} style={wrongPass?{borderColor:"red"}:{}}/>
                <label>Password</label>
                <input type="password" onChange={e=>setPass(e.target.value)} style={wrongPass?{borderColor:"red"}:{}}/>
                <label>Confirm Password</label>
                <button className="btn" onClick={ClickHandler}><img alt="signup" src={Arrow}></img></button>
            </form>
            {wrongPass?<p className="cred">*Password don't match</p>:<h1></h1>}
            <p style={{marginTop:"-10px"}} className="signuplink">Already have an account?<Link style={{color:"white"}} to='/storelogin'> Login</Link></p>
        </div>
        </>
    )
}

export default StoreSignup
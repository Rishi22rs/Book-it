import React from 'react'
import {Link} from 'react-router-dom'

const Home=()=>{
    return(
    <div className="screen">
      <h1 className="heading" style={{fontSize:60}}>Book it Now</h1>
      <div className="form">
        <h2 style={{textAlign:"center"}}>User page</h2>
        <h3>Book all of your appointments or any order from any store in your locality all in one place.</h3>
        <Link style={{color:"#ff1940"}} to='/userlogin'><button className="mainbtn">Login</button></Link>
        <Link style={{color:"#ff1940"}} to='/usersignup'><button className="mainbtn">Sign up</button></Link>
      </div>
      <p className="signuplink">Have a store? Register here...<Link style={{color:"white"}} to='/storehome'> Store page</Link></p>
    </div>
    )
}

export default Home
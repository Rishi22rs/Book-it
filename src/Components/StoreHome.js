import React from 'react'
import {Link} from 'react-router-dom'

const Home=()=>{
    return(
    <div className="screen">
      <h1 className="heading" style={{fontSize:60}}>Book it</h1>
      <div className="form">
        <h2 style={{textAlign:"center"}}>Store page</h2>
        <h3>Publish your store on our app and let people book their appointment and order online.</h3>
        <Link style={{color:"#ff1940"}} to='/storelogin'><button className="mainbtn">Login</button></Link>
        <Link style={{color:"#ff1940"}} to='/storesignup'><button className="mainbtn">Sign up</button></Link>
      </div>
      <p className="signuplink">Have a store? Register here...<Link style={{color:"white"}} to='/'> User page</Link></p>
    </div>
    )
}

export default Home
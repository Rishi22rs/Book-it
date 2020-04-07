import React from 'react'
import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <ul>
            <li><Link to='/userLogin'>User Login</Link></li>
            <li><Link to='/userSignup'>User Signup</Link></li>
            <li><Link to='/storeLogin'>Store Login</Link></li>
            <li><Link to='/storeSignup'>Store Signup</Link></li>
        </ul>
    )    
}

export default Nav
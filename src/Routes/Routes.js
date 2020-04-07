import React from 'react'
import {BrowserRouter as Route,Switch, Router} from 'react-router-dom'
import UserLogin from '../Components/UserLogin.js'
import UserSignup from '../Components/UserSignup.js'
import StoreLogin from '../Components/StoreLogin.js'
import StoreSignup from '../Components/StoreSignup.js'
import StoreList from '../Components/StoreList.js'
import StoreHome from '../Components/StoreHome.js'
import Home from '../Components/Home.js'

const Routes=()=>{
    return(
    <Switch>
        <Route path='/userlogin' component={UserLogin}/>
        <Route path='/usersignup' component={UserSignup}/>
        <Route path='/storelogin' component={StoreLogin}/>
        <Route path='/storesignup' component={StoreSignup}/>
        <Route path='/storelist' component={StoreList}/>  
        <Route path='/storehome' component={StoreHome}/> 
        <Route path='/' exact component={Home}/>
    </Switch>
    )
}

export default Routes
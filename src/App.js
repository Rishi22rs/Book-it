import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './Stylesheets/Userlogin.css'
import UserLogin from './Components/UserLogin.js'
import UserSignup from './Components/UserSignup.js'
import StoreLogin from './Components/StoreLogin.js'
import StoreSignup from './Components/StoreSignup.js'
import StoreList from './Components/StoreList.js'
import StoreHome from './Components/StoreHome.js'
import Home from './Components/Home.js'
import Request from './Components/Request'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/userlogin' component={UserLogin}/>
        <Route path='/usersignup' component={UserSignup}/>
        <Route path='/storelogin' component={StoreLogin}/>
        <Route path='/storesignup' component={StoreSignup}/>
        <Route path='/storehome' component={StoreHome}/>
        <Route path='/storelist/:uid' component={StoreList}/>
        <Route path='/requests/:uid' component={Request}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  )
}

export default App

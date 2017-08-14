import React, { Component } from 'react';
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import ReviewForm from './containers/ReviewForm'
import MgmtForm from './containers/MgmtForm'
import Auth from './auth/authorize'
import AuthAdapter from './auth/authAdapter'
import BuildingList from './components/BuildingList'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { createHashHistory } from 'history'
import Home from './containers/Home'

const history = createHashHistory

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      }
    }
  }
  onLogin = (loginParams) => {
  AuthAdapter.login(loginParams)
    .then( res => {
      //check for an error message
      if( res.error ){
         console.log(res.error)
      }else{
        localStorage.setItem('jwt', res.jwt)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username
          }
        })
      }
      //if error render login again
      //else set the jwt token and forward user to /giphs
    })
  }

  onSignup = (signUpParams) => {
AuthAdapter.signUp(signUpParams)
  .then( res => {
    //check for an error message
    if (res.error) {
      console.log("do nothing")
    } else {
      localStorage.setItem('jwt', res.jwt)
      this.setState({
        auth: {
          isLoggedIn: true,
          user: res.username
        }
      })
    }
    //if error render login again
    //else set the jwt token and forward user to /giphs
  })
}


handleLogout = () => {
  localStorage.clear()
  this.setState({auth: {
    isLoggedIn:false,
    user: ''
  }})
}

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
            <Route exact path="/" render={()=> this.state.auth.isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={this.onLogin}/>} />
            <Route path="/signup" render={() => <SignupForm /> }/>
            <Route path="/new-review" render={() => <ReviewForm />} />
            <Route path="/mgmt-signup" render={()=> <MgmtForm />} />
            {/* <Route path="/buildings" component={BuildingList}/> */}
            <Route path="/home" render={()=> <Home handleLogout={this.handleLogout} />} />

          </Switch>
            </div>
        </Router>
      </div>
    );
  }
}


export default App

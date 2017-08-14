import React, { Component } from 'react';
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import ReviewForm from './containers/ReviewForm'
import MgmtForm from './containers/MgmtForm'
import Auth from './auth/authorize'
import AuthAdapter from './auth/authAdapter'
import Building from './components/Building'
import './App.css'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './containers/Home'


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
    console.log(this.state)
    return (
      <div>
        <Router>
          <div>
            <Switch>
            <Route exact path="/" render={()=> this.state.auth.isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={this.onLogin}/>} />
            <Route path="/signup" render={() => <SignupForm /> }/>
            <Route path="/mgmt-signup" render={()=> <MgmtForm />} />
            <Route path="/buildings/:id" component={Auth(Building)}/>
            <Route path="/home" component={Auth(Home, {handleLogout: this.handleLogout})} />


          </Switch>
            </div>
        </Router>
      </div>
    );
  }
}


export default App

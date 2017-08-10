import React, { Component } from 'react';
import Navbar from './components/nav'
import LoginForm from './containers/LoginForm'
import Auth from './auth/authorize'
import AuthAdapter from './auth/authAdapter'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


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
    if( res.error ){
      console.log("do nothing")
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
        <Router>
          <div>
            <Navbar />
            App
            <Route exact path="/" render={()=> this.state.auth.isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={this.onLogin}/>} />
            <Route path="/logout" render={() => {this.handleLogout()
               return (<Redirect to="/"/>)}} />

            </div>
        </Router>
      </div>
    );
  }
}


export default App

import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import MainContainer from './MainContainer';
import Welcome from './Welcome';
import UserProfile from './UserProfile';


import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {

  state = {
    isLoggedIn: false,
    currentUser: ''
  }

  componentDidMount(){
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true })
    }
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true })
    }
  }

  failedLogin = () =>{
    localStorage.clear()
    this.setState({
      isLoggedin: false
    }, () =>{
      return <Redirect push to="/login" />
    })
  }

  currentUser = (current_user) => {
    this.setState({
      currentUser: current_user
    })
  }


  render() {
    return (
      <div className="parent">
        <BrowserRouter>
          <Header isLoggedIn={this.state.isLoggedIn} />

          <Switch>
            <Route exact path="/" component={() => {
                if(localStorage.getItem('auth_key')){
                  return <MainContainer />
                  // return <Route path='/homepage' component={OppContainer} />
                }else{
                  return <Redirect to='/welcome' />
                }
              }} />

              <Route path='/welcome' >
                <Welcome />
              </Route >
              
              <Route path="/login" component={() => {
                return <Login currentUser={this.currentUser} failedLogin={this.failedLogin} handleLogin={this.handleLogin} />
              }} />

              <Route path='/signup' component={SignUp} />

              <Route path='/logout' component={() => {
                localStorage.clear()
                this.setState({ isLoggedIn: false })
                  return <Redirect to='/welcome'/>
              }} />



              <Route path='/userpage' component={ () => {
                return <UserProfile user={this.state.currentUser} />
              }} />
              
              
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>

        </BrowserRouter>
      </div>

    )
  }
}

export default App;
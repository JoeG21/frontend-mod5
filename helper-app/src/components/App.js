import React, { Component } from 'react';
import '../App.css';
import OppContainer from './OppContainer';

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
    isLoggedIn: false
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

  render() {
    return (
      <div className="parent">
        <BrowserRouter>

          <div className='app'> 
            <OppContainer />
          </div>`

        </BrowserRouter>
      </div>

    )
  }
}

export default App;
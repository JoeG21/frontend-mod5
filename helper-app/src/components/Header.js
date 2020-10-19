import React from 'react';
import { NavLink } from 'react-router-dom';

const handleLoginRender = (isLoggedIn) => {
  if(isLoggedIn){
    return (
        <>
            <NavLink to='/logout'> Logout </NavLink>
            <NavLink to='/homepage'> Home </NavLink>
            <NavLink to='/userpage'> Profile </NavLink>
        </>
    )
  }else{
    return(
      <>
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/signup'> Signup </NavLink>
      </>
    )
  }
}

const Header = (props) => {

  return (
    <div className='navbar'>
      <div className='header'> Valath </div>
      <ul>
          {/* <NavLink to='/homepage'> Home </NavLink>
          <NavLink to='/userpage'> Your Profile </NavLink> */}
        {/* <NavLink to="/"> Home </NavLink> */}
        {/* <NavLink to="/newbook"> Add New Opportunity  </NavLink> */}
        {handleLoginRender(props.isLoggedIn)}
      </ul>
    </div>
  )
}

export default Header;
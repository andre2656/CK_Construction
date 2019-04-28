import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

import "./NavBar.css";

function NavBar() {

  return (
    <div>
      {/* {!user && <NavLink to="/RegistrationPage" className="navlink" activeClassName="selected">Registration Page</NavLink>}
      {!user && <NavLink to="/LoginPage" className="navlink" activeClassName="selected">Login Page</NavLink>}

      {user && <NavLink to="/UserHomePage" className="navlink" activeClassName="selected">User Home Page</NavLink>}
  {user && <a href="#" className="navlink" onClick={logoutCheck}>Logout</a>}*/}

      <div id="navbar" className='container1' className='col-sm-5'>
        <div className='row'>
          <NavLink id='page' to="Home" activeClassName="selected">CK Construction</NavLink><strong>|</strong>
          <NavLink id='page' to="About" activeClassName="selected">About</NavLink><strong>|</strong>
          <NavLink id='page' to="Portfolio" activeClassName="selected">Portfolio</NavLink><strong>|</strong>
          <div className="dropdown show">
            <div id='page' className="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown"> Steel </div>
            <div id='page' className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <NavLink className="dropdown-item" to="Steel-Division" activeClassName="selected">Steel Division</NavLink>
              <NavLink className="dropdown-item" to="Service-Construction" activeClassName="selected">Service/Construction </NavLink>
            </div>
          </div><strong>|</strong>
          <NavLink id='page' to="Services" activeClassName="selected">Services</NavLink><strong>|</strong>
          <NavLink id='page' to="Contact" activeClassName="selected">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

// By wrapping this component in `withRouter`, we get access to props.history
//  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
export default withRouter(NavBar);
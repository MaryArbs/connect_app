import React from 'react'
import { Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom' //updates the browser URL and renders the route componenet 




const Header = () =>

  <div className="main_header">
    <h1 style={{ textAlign: 'center' }}>-LET'S CONNECT-</h1>
    <div className="quote">
      <h2>"Coming together is a beginning; keeping together is progress; working together is success." - Henry Ford</h2>
    </div>
    <div className="navbar">
      <NavLink to="/">
        <button class="ui button-menu">
          Home
            </button>
      </NavLink>
      <NavLink to="/about">
        <button class="ui button-menu">
          About
            </button>
      </NavLink>
      <NavLink to="/categories">
        <button class="ui button-menu">
          Services
            </button>
      </NavLink>
    </div>
  </div>





export default Header
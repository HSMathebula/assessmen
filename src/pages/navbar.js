import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='container nav'>
        <div className="logo-container">
          <Link to="/">
            <h4 className='logo-name'>Assessment</h4>
          </Link>
        </div>
        <div className="links-container">
          <ul className='links'>
            <li className='link'>
              <NavLink
                className={(navData) => (navData.isActive ? 'active link' : 'link')}
                to="/"
              >
                Monolith bunner
              </NavLink>
            </li>
            <li className='link'>
              <NavLink
                className={(navData) => (navData.isActive ? 'active link' : 'link')}
                to="/accordion"
              >
                Snapdocs accordion
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

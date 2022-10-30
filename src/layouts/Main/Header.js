import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='main-nav'>
      <div className="container">
        <header className="main-header">
          <div className="main-header__logo">
            <NavLink to="/">
              <img src="logo192.png" alt="logo" />
            </NavLink>
          </div>
          <div className="main-header__menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </nav>
  )
}

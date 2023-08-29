import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='primarynav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="About">About</NavLink>
      <NavLink to="Products">Products</NavLink>
      <NavLink to="users">Users</NavLink>
    </nav>
  )
}

export default Navbar
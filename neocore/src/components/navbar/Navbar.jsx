import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <ul>
        <li> <a href="#product" >Product</a></li>
        <li> <a href="#services" >Services</a></li>
        <li> <a href="#features" >Features</a></li>
      </ul>
    </div>
    </>
  )
}

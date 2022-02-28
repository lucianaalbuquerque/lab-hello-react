import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'


function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="text">
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn how to use the most popular frontend library, and become a superninja developer.</h3>
        <button>Awesome!</button>
      </div>
    </div>
  )
}

export default Header
import React,{useEffect} from 'react'
import $ from 'jquery';


function Navbar() {
   
  return (
    <div>
  <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
    <div className="container">
      <a className="logo" href="#">Darshan</a>
      
      <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">       
      </a>
    </div>
  </nav>
  <header id="home" className="header">
    <div className="overlay" />
    <div className="header-content container">
      <h1 className="header-title">
        <span className="up">HI!</span>
        <span className="down">I am Darshan Unagar</span>
      </h1>
      <p className="header-subtitle">WEB DEVELOPER</p>
      <button className="btn btn-primary">Visit My Works</button>
    </div>
  </header>
</div>

  )
}

export default Navbar

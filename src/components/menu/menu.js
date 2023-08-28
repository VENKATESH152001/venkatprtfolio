import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

export function Menu(){
  return(
        <>
        <nav className="navbar navbar-expand-lg nav_bg">
  <div className="container-fluid ">
    
    {/* <a className="navbar-brand" href="#">Venkat Portfolio</a>  */}
<h1><p class=" navbar-brand badge">Port<span class="bg-black"> folio</span></p></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse p-1" id="navbarSupportedContent">
      
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <Link className="nav-link text-white" to='/'>Home </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to='/about'>About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to='/education'>Education</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link text-white" to='/myworks'>Myworks</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link text-white" to='/skills'>Skills</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to='/Contact'>Contact</Link>
        </li>
      
     
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Nav = () => (
  <section className="text-center" id="sidebar">
    <section id="intro">
      <Link to="/" className="logo ">
        <img src={`/images/Mobile-Logo.jpg`} alt="RSM-logo" />
      </Link>
      <header>
        <div>
        <h2>Fab Signatures</h2>
        Reg No. XYZ Wardha
        </div>
       
      </header>    
    </section>

    <section className="blurb text-center">
      <ul className="actions">
        <li>
          <p>
            Almost Everyone has Eyes , but only a Few have Vision
          </p>
          <Link to="/about" className="button ">
            About Us
          </Link>         
        </li>
        
      </ul>
     <a href="/platinum" ><Image  src="/images/platinumjubilee/Header-logo-latest.jpg"></Image></a> 
    </section>
   <div></div>
  </section>
);

export default Nav;

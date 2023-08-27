import React, { useState } from "react";
import { Titel } from "../App";
import { Link } from "react-router-dom";
import {Route, Routes } from "react-router-dom";
import About from "./About";

const Header = () => {
  // const [titel, setTitel] = useState("Food Vill");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Titel />
      {/* <h1>{titel}</h1> */}
      {/* <button onClick={() => setTitel("New Food Villa")} className='header-btn'>Change Titel</button> */}
      <div className="nav-items">
        <ul>
          <li >
            <Link className="link-text"   to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="header-btn" onClick={() => setIsLoggedIn(false)}>
         Login Out  
        </button>
      ) : (
        <button className="header-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};


export default Header;

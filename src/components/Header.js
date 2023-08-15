import React, { useState } from "react";
import { Titel } from "../App";

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
          <li>House</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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

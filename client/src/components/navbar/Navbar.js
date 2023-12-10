// Navbar.js

import React, { useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    const handleMenuToggle = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("show-menu");
    };

    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", handleMenuToggle);

    return () => {
      // Remove the event listener when the component unmounts
      menuToggle.removeEventListener("click", handleMenuToggle);
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <nav>
      <div className="nav-main">
        <div className="nav-header">
          <div className="menu-toggle">&#9776; Menu</div>
          <div className="nav-logo">
            <h3>Sporteka</h3>
          </div>
          <ul className="menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


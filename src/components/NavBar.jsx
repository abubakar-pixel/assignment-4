import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="blackText">
        Home
      </NavLink>
      <NavLink to="/about" className="blackText">
        About us
      </NavLink>
      <NavLink to="/login" className="blackText">
        Login
      </NavLink>
      <NavLink to="/contact" className="blackText">
        Contact us
      </NavLink>
    </nav>
  );
};

export default NavBar;

import React from "react";
import NavBar from "./NavBar";
import "./LeftWelcomeDiv.css";

const LeftWelcomeDiv = () => {
  return (
    <div>
      <NavBar />
      <div id="welcomeText">
        Welcome to <span class="redText">FEMMY'S</span>GARAGE
      </div>
    </div>
  );
};

export default LeftWelcomeDiv;

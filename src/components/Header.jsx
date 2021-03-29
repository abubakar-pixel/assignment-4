import React from "react";
import "./Header";

const header = () => {
  return (
    <header className="whiteText">
      <div id="headerBar">
        <div id="headerLogo">
          <b>
            <span className="redText">FEMMY'S</span>GARAGE
          </b>
        </div>

        <a href="/">
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <h1>Best place to buy your dream car!</h1>
      <p>-Just enter the name of your dream car and proceed</p>
    </header>
  );
};

export default header;

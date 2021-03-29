import React from "react";
import "./InputForm.css";

const InputForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="enter your car name here" />
        <button id="buyNowButton" className="whiteText">
          <b>Buy Now</b>
        </button>
      </form>
      <p>
        <a href="/" className="whiteText">
          -or specicy parameters manually
        </a>
      </p>
    </div>
  );
};

export default InputForm;

import React from "react";
import NavBar from "../components/NavBar";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="navBar">
        <NavBar className="navLinks" />
      </div>
      <form>
        <h2>Sign Up Here</h2>
        <label htmlFor="fistname">First Name :</label>
        <input
          type="text"
          name="firstname"
          placeholder="enter your first name here"
        />

        <label htmlFor="">Last Name :</label>
        <input type="text" placeholder="enter your last name here" />

        <label htmlFor="">User Name :</label>
        <input type="text" placeholder="enter your username here" />

        <label htmlFor="">Email :</label>
        <input type="email" placeholder="enter your email address here" />

        <label htmlFor="">Password :</label>
        <input type="password" placeholder="enter your secrete password here" />

        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

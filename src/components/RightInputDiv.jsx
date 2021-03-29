import React from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import BottomAbout from "./BottomAbout";
import "./RightInputDiv.css";

const RightInputDiv = () => {
  return (
    <section id="rightDiv">
      <Header />
      <InputForm />
      <BottomAbout />
    </section>
  );
};

export default RightInputDiv;

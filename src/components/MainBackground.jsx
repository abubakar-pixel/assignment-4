import React from "react";

import RightInputDiv from "./RightInputDiv";
import LeftWelcomeDiv from "./LeftWelcomeDiv";
// import BgButton from "./BgButton";
import "./MainBackground.css";

const MainBackground = () => {
  return (
    <div className="bgAnimation">
      <main id="main-bg">
        <LeftWelcomeDiv />
        <RightInputDiv />
      </main>
      {/* <BgButton /> */}
    </div>
  );
};

export default MainBackground;

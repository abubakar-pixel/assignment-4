import React from "react";
import NavBar from "../components/NavBar";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="navBar">
        <NavBar className="navLinks" />
      </div>
      <section>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugaectus nesciunt a, ipsa adipisci cumque corrupti id maiores in sed
          eos ducimus vel expedita et.
        </p>
      </section>
      <section>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquid,
          quisquam necessitatibus possimus, deleniti commodi natus ipsam sequi,
          tempora veritatis ipsa? Aspernatur veniam voluptas ipsum nam
          cupiditate, accusamus excepturi doloribus sed voluptates repudiandae
          atque delectus aliquam voluptate qui corrupti explicabo?
        </p>
      </section>
      <section>
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio fugit
          asperiores libero labore nam dignissimos alias molestiae cupiditate
          est rem.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;

import React from "react";
import NavBar from "../components/NavBar";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="navBar">
        <NavBar className="navLinks" />
      </div>
      <div className="div1">
        <section className="mainAddress">
          <h2>Main Address</h2>
          <address>
            Lorem ipsum conse <br />
            fuga porro amet unde <br />
            corrupti id maiores in sed
            <br />
            <br />
            corrupti id maiores in.
          </address>
        </section>

        <section class="contactDetails">
          <h2>Contact Details</h2>
          <div className="contactDiv">
            <p>
              <h3>Ghana Branch</h3>
              fuga porro amet unde ipsam <br />
              corrupti id maiores in sed. <br />
              corti id maiores in sed eos.
            </p>
            <p>
              <h3>Nigeria Branch </h3>
              fuga porro amet unde ipsam <br />
              corr id maios in sed eos. <br />
              corri id maiores in sed.
            </p>
            <p>
              <h3>Kenya Branch </h3>
              fuga porro amet unde ipsam <br />
              corri id maiores in sed eos. <br />
              corrupti id maiores sed eos.
            </p>
            <p>
              <h3>South Africa Branch </h3>
              fuga porro amet unde ipsam <br />
              corrupti id maiores in sed eos. <br />
              corrupti id maiores in sed eos.
            </p>
          </div>
        </section>
      </div>
      <div className="div2">
        <h2>Head Office Location</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquid,
          quisquam necessitatibus possimus, deleniti commodi natus ipsam sequi,
          tempora veritatis ipsa? Aspernatur veniam voluptas ipsum nam
          cupiditate, accusamus excepturi doloribus sed voluptates repudiandae
          atque delectus aliquam voluptate qui corrupti explicabo?
        </p>
        <img src="sss.jpeg" alt="gMap" />
      </div>
    </div>
  );
};

export default ContactPage;

import React from "react";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../images/Logo.png";
import "../Css/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <a href="https://gamingstore.netlify.com" className="firstPart_NavBar">
          <img src={Logo} alt="" />
          <h2>Gaming Store</h2>
        </a>
      </div>
      <div className="SocialIcon_NavBar">
        <a
          href="https://www.facebook.com/nikhil.kavathiya.378"
          className="socialIcons"
        >
          <FaFacebook className=" icon" />
        </a>
        <a
          href="https://www.instagram.com/i._.am._.nk/?igshid=1hevhi9xzvwul"
          className="socialIcons"
        >
          <FaInstagram className=" icon" />
        </a>
        <a href="https://dev.to/workwithnk" className="socialIcons">
          <FaDev className=" icon" />
        </a>
        <a href="https://github.com/workwithnk/" className="socialIcons">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;

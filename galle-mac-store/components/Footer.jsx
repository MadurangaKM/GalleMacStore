import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div
        onClick={() => window.open("tel:+94771646687", "_blank")}
        style={{ cursor: "pointer", color: "#f02d34", fontWeight: 700 }}
      >
        <p>Call +94 (77) 1646687</p>
      </div>
      <p>2022 Galle Mac Store All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;

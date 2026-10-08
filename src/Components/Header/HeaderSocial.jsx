import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
// import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { SiUpwork } from "react-icons/si";
export default function HeaderSocial() {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/osama-megahed-887b76201/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/osama24680" target="_blank" rel="noreferrer">
        {" "}
        <FaGithub />{" "}
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01cce0d0675a271639"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <SiUpwork />{" "}
      </a>
      <a
        href="https://www.facebook.com/share/1FAUnYc5V9/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <AiFillFacebook />{" "}
      </a>
      <a
        href="https://www.instagram.com/osamamegahed12"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaInstagram />{" "}
      </a>
    </div>
  );
}

import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://github.com/KevinJWesley" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kevin-wesley-896044205/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1rL3La5DTPo-jmn-CuGVJu6oslNrjbMTC/edit?usp=sharing&ouid=117300256813715071933&rtpof=true&sd=true">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

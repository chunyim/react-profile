import "./FooterStyles.css";

import React from "react";

import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />

            <p>North York, ON</p>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1-647-896-3967
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaEnvelope
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              chunhinyim@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Contact Me</h4>
          <p>
            Feel free to contact me through the following channels:
            <div className="social">
              <a
                href="https://www.linkedin.com/in/chunyim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>

              <a
                href="https://github.com/chunyim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>

              <a
                href="mailto:chunhinyim@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import "./FooterStyles.css";

import React from "react";

import {
  FaEnvelope,
  FaFacebook,
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

            <p> 8 Rean Drive North York, ON</p>
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
          <h4>About Me</h4>
          <p>
            This is Chun Hin Yim. A full stack developer, and the Founder of
            Seekver with the aim to help people solving problems!
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
                href="https://www.facebook.com/chunhin.yim.7"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaFacebook
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

import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                <div>
                    <p>At/p Borjaiwadi, Tal-Koregaon,</p>
                    <p>Dist-Satara, Maharashtra</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />8999142126</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />jyotibodake4656@gmail.com</h4>
            </div>
            </div>



            <div className="right">
                <h4>About Myself</h4>
                <p>This is me jyoti bodake i enjoy 
                   discussing new projects and developing challenges</p>
                <div className="social">
                  <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                  <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
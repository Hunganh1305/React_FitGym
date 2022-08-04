import React from "react";
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="Footer-container container">
            <hr />
            <div className="footer">
                <div className="socials-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <dir className="blur blur-f-1"></dir>
            <dir className="blur blur-f-2"></dir>
        </div>
    )
}

export default Footer;
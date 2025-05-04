import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";

export default function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer-content">
                <div className="Info">
                    <div className="someInfo">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="">Who are we ?</a></li>
                            <li><a href="">Join us</a></li>
                            <li><a href="">What comes next ?</a></li>
                        </ul>
                    </div>
                    <div className="socialMedia-cards">
                        <h3>we accept</h3>
                        <div>
                          <RiVisaFill size="2em"/>
                          <FaCcMastercard size="2em" />
                          <FaPaypal size="2em"/>
                          <SiAmericanexpress size="2em" />
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="Info">
                    <div className="someInfo">
                        <h3>Any question</h3>
                        <ul>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Complain</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>
                    <div className="socialMedia-cards">
                        <h3>Follow us on</h3>
                        <div>
                          <FaInstagram size="2em" />
                          <FaFacebookSquare size="2em" />
                          <FaLinkedin size="2em" />
                            <FaSquareGithub size="2em" />
                            
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="footer-bottom">
                <a href=""><span>&#169;</span> 2025 LR E-commerce website</a>
                <a href="">All rights reserved</a>
            </div>
        </div>
        </>
    )
}
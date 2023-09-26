import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import {LuPhone} from 'react-icons/lu';
import {TfiEmail} from 'react-icons/tfi';
import {FiMapPin} from 'react-icons/fi';

function Footer(){
    const navigate = useNavigate();
    return(
        <div className="footer-container">
            <div className="footer-content">
            <div className="footer-navigation" id="column-first">
                <p>Quick Links</p>
                <ul className="footer-nav">
                <li className="footer-nav-item" onClick={() => navigate("/")}>Home</li>
                <li className="footer-nav-item" onClick={() => navigate("/thebuilding")}>The Building</li>
                <li className="footer-nav-item" onClick={() => navigate("/apartments")}>Apartments</li>
                <li className="footer-nav-item" onClick={() => navigate("/gallery")}>Gallery</li>
                <li className="footer-nav-item" onClick={() => navigate("/neighbourhood")}>Neighbourhood</li>
                <li className="footer-nav-item" onClick={() => navigate("/amenities")}>Amenities</li>
                <li className="footer-nav-item" onClick={() => navigate("/contact")}>Contact</li>
                </ul>
            </div>
            <div className="footer-logo" id="column-second">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-contact" id="column-third">
                <p>Contact</p>
                <ul className="contact-list">
                    <li className="contact-list-item"><LuPhone className="icon"/> +785 354 487</li>
                    <li className="contact-list-item"><TfiEmail className="icon"/> somemail@gmail.com</li>
                    <li className="contact-list-item"><FiMapPin className="icon"/> 21.Jump Street, Miami USA</li>
                </ul>
            </div>
            </div>
            <div className="copyright">
                <p>&copy;Copyright 2023 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
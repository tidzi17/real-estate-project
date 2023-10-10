import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {LuPhone} from 'react-icons/lu';
import {TfiEmail} from 'react-icons/tfi';
import {FiMapPin} from 'react-icons/fi';

function Footer(){
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubscription = () => {
      setIsSubmitted(true);
    };
    return(
        <div className="footer-container">
            <div className="footer-content">
            <div className="footer-logo" id="column-first">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-contact" id="column-second">
                <div className="content">
                <p>Contact</p>
                <span>21.Jump Street <br/>Miami 54876, USA</span>
                <span><span style={{fontWeight:"bold"}}>Phone:</span> +598/5659-56</span>
                <span><span style={{fontWeight:"bold"}}>Email:</span> info@harmony.com</span>
                <div className="social-buttons">
      <a href="#" className="social-button social-button--facebook" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="social-button social-button--instagram" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="social-button social-button--twitter" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="social-button social-button--youtube" aria-label="Youtube">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
                </div>
                </div>
            </div>
            <div className="footer-navigation" id="column-third">
                <div className="content">
                <p>Quick Links</p>
                <ul className="footer-nav">
                <li className="footer-nav-item" onClick={() => navigate("/")}>Home</li>
               {/*  <li className="footer-nav-item" onClick={() => navigate("/thebuilding")}>The Building</li> */}
                <li className="footer-nav-item" onClick={() => navigate("/apartments")}>Apartments</li>
                <li className="footer-nav-item" onClick={() => navigate("/gallery")}> Gallery</li>
                <li className="footer-nav-item" onClick={() => navigate("/neighbourhood")}>Neighbourhood</li>
                <li className="footer-nav-item" onClick={() => navigate("/amenities")}>Amenities</li>
                <li className="footer-nav-item" onClick={() => navigate("/contact")}>Contact</li>
                </ul>
                </div>
            </div>
            <div className="subscribe" id="column-fourth">
                <div className="content">
                    <p>Our Newsletter</p>
                    <span>Keep up with our latest news and events.</span>
                </div>
                <div className="container">
             <div className="content-sub">
        <form className={`subscription ${isSubmitted ? 'done' : ''}`}>
          <input className="add-email" type="email" placeholder="subscribe@me.now" />
          <button className="submit-email" type="button" onClick={handleSubscription}>
            <span className="before-submit">Subscribe</span>
            <span className="after-submit">Thank you for subscribing!</span>
          </button>
        </form>
        </div>
       </div>
            </div>
            </div>
           
            <div className="copyright">
   
                <p>&copy;Copyright 2023 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
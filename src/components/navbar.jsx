import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import '../styles/main.scss';

function Navbar(){
    const navigate = useNavigate();
    const [Mobile, setMobile] = useState(false);

    return(
        <header className="navigation-container">
             <div className="mobile-logo">
                    <img src={logo} alt="logo" className="mobile-logo"/>
                </div>
                <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
                </button>
            <nav className="navbar">
           
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <div className="nav-box" id="nav-box-first">
                <li className="nav-item" onClick={() => navigate("/")}>Home</li>
                <li className="nav-item" onClick={() => navigate("/thebuilding")}>The Building</li>
                <li className="nav-item" onClick={() => navigate("/apartments")}>Apartments</li>
                <li className="nav-item" onClick={() => navigate("/gallery")}>Gallery</li>
                </div>
                <div className="nav-logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="nav-box" id="nav-box-second">
                <li className="nav-item" onClick={() => navigate("/neighbourhood")}>Neighbourhood</li>
                <li className="nav-item" onClick={() => navigate("/amenities")}>Amenities</li>
                <li className="nav-item" onClick={() => navigate("/contact")}>Contact</li>
                <p className="nav-nub">+785 354 487</p>
                </div>
                </ul>
              
             
            </nav>
        </header>
    );
}

export default Navbar;
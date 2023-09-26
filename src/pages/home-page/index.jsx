import React from "react";
import {ImHome} from 'react-icons/im';
import {BsCalendarCheck} from 'react-icons/bs';
import '../../styles/main.scss';
import { Link } from "react-router-dom";
import Counter from "../../components/counter";
import HomeParallax from "../../components/homeparallax";
import Form from "../../components/contact-form";

function Home(){
    return(
        <div className="home" id="home">
            <div className="home-container">
            <div className="heading">
            <p className="heading-text">
                    <div className="top-items">
                        <BsCalendarCheck className="icon"/>
                        <p>Ready in 2024</p>
                        <ImHome className="icon"/>
                        <p>500+ Apartments</p>
                    </div>
                Inovative Living Spaces</p>
            </div>
            <div class='scrolldown'>
                <div class="chevrons">
               <div class='chevrondown'></div>
              <div class='chevrondown'></div>
                </div>
              </div>
            </div>
            <section className="intro-container">
            <div class="intro-container-text">
                <h3>The building</h3>
                <h2>Elevate your living experience</h2>
                <p>Discover Harmony Residence in Miami, where elegant living harmonizes
                    with stunning ocean vistas. Architect Luke Danes has crafted these
                    residences to create an idyllic coastal experience.
                </p>
            </div>
            <div class="intro-container-links">
                <Link to={"./gallery"} class="intro-item intro-exterior">
                    <h4>Exterior</h4>
                    <h3>Costal Elegance In Harmony</h3>
                </Link>
                <Link to={"./neighbourhood"}  class="intro-item intro-neigh">
                    <h4>Neighbourhood</h4>
                    <h3>Harmonious Neighborhood Haven</h3>
                </Link>
                <Link to={"./gallery"}  class="intro-item intro-interior">
                    <h4>Interior</h4>
                    <h3>Timeless Interior Elegance</h3>
                </Link>
            </div>
            </section>
            <section><Counter /></section>
            <section className="overview-container">
                <div className="overview-item" id="image"></div>
                <div className="overview-item" id="text-block">
                <h3>Overview</h3>
                    <h2>Harmony Residence</h2>
                    <p>Harmony Residence is an upscale apartment complex nestled in the vibrant 
                    heart of Miami. Developed by a visionary team at Harmony Developments and 
                    thoughtfully designed by the renowned architect, Luke Dave, Harmony Residence
                    boasts a total of 500 meticulously crafted apartments and penthouses. With a 
                    commitment to providing an exceptional living experience, Harmony Residence
                    offers an array of top-notch amenities and luxury services available 24/7.
                    </p>
                </div>
            </section>
            <section><HomeParallax /></section>
            <section><Form /></section>

        </div>
    )
}

export default Home;
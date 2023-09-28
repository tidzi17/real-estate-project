import React from "react";
import Form from "../../components/contact-form";
import '../../styles/main.scss';
import Map from "../../components/map";
import {LuPhone} from 'react-icons/lu';
import {TfiEmail} from 'react-icons/tfi';
import {FiMapPin} from 'react-icons/fi';

function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="landing-container">
                <div className="heading">
                    <h1>Contact</h1>
                </div>
            </div>
            <section className="contact-info-container">
                <div className="container-item" id="info">
                    <div className="text-block">
                    <h3>Explore Your Dream Home Today</h3>
                    <h2>Get in Touch with Us</h2>
                    <p>Whether you're interested in buying your dream residence or eager to experience
                 a guided tour of Harmony Residence,we'd love to hear from you. Our dedicated 
                 team is here to assist you in any way, answering your queries and helping
                you embark on your journey to harmonious living. Contact us now to take the 
                first step towards a life of elegance and tranquility at Harmony Residence.
                   </p>
                    </div>
                    <div className="socials">
                    <p className="contact-list-item"><LuPhone className="icon"/> +785 354 487</p>
                    <p className="contact-list-item"><TfiEmail className="icon"/> somemail@gmail.com</p>
                    <p className="contact-list-item"><FiMapPin className="icon"/> 21.Jump Street, Miami USA</p>
                    </div>
                </div>
                <div className="container-item" id="map">
                    <Map />
                </div>
            </section>
            <section><Form /></section>
        </div>
    )
}

export default Contact;
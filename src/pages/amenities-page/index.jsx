import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import building from '../../assets/amenities/bulding.jpg';
import interior from '../../assets/amenities/interiorbw.jpg';
import wedding from '../../assets/amenities/wedding.jpeg';
import item1 from '../../assets/amenities/icons/home-automation.png';
import item2 from '../../assets/amenities/icons/cctv-camera.png';
import item3 from '../../assets/amenities/icons/voice-assistant.png';
import item4 from '../../assets/amenities/icons/smart-door.png';
import item5 from '../../assets/amenities/icons/thermostat.png';
import item6 from '../../assets/amenities/icons/smart-lighting.png';
import item7 from '../../assets/amenities/icons/household-appliance.png';

const smarthouseIcons =  [item1, item2, item3, item4, item5, item6, item7];

function Amenities(){
    
    return(
        <div className="amenities" id="amenities">
            <div className="landing-container">
                <div className="heading">
                <h1>Amenities</h1>
                </div>
                <ScrollDown />
            </div>
            <section className="intro-container" id="first-section">
                <div id="fist-section-img" className="container"  style={{ backgroundImage: `url(${building})` }}></div>
                <div id="text-block" className="container">
                    <h3>Seamless Harmonious Living</h3>
                    <h2>All you need is here</h2>
                    <p>At Harmony Residence, indulge in a world of unmatched amenities, from the opulent grand lobby to the rooftop pool with city views. Stay active in the fitness center, unwind in the serene spa, and connect with neighbors in lush communal spaces. Embrace the convenience of smart home features for effortless living. Welcome to harmonious living at its finest.</p>
                </div>
            </section>
            <section className="design-container"  style={{ backgroundImage: `url(${interior})` }}>
                <h3>Where Artistry Meets Architecture</h3>
                <h2>Artfully Designed Spaces</h2>
                <p>Discover a living experience that transcends the ordinary at Harmony Residence. Each space within this extraordinary complex is a testament to the seamless fusion of artistry and architecture. From the majestic façade that commands attention to the meticulously curated interiors that evoke awe, every detail is an exquisite work of art. Embrace the beauty that surrounds you as you indulge in a life of sophistication and artistic appreciation. Welcome to a sanctuary where artistry and architecture unite in perfect harmony.</p>
            </section>
            <section className="community-container">
                <div id="community-container-img" className="container"  style={{ backgroundImage: `url(${wedding})` }}></div>
                <div id="text-block" className="container">
                    <h3>A Community of Dreams</h3>
                    <h2>Creating a Vibrant Community</h2>
                    <p>In our pursuit of excellence, we strive to create a vibrant community where residents can form lasting bonds and cherish cherished memories. Be it intimate gatherings in our lush communal spaces or engaging and wedding events organized exclusively for our residents, Harmony Residence fosters an environment where neighbors become friends.</p>
                </div>
            </section>
            <section className="smarthouse-container">
                <div className="text-block">
                    <h3>Effortless Living, Enhanced</h3>
                    <h2>Experience the Harmony Difference - Smart House Living</h2>
                    <p>Beyond the exquisite interiors, Harmony Residence offers an abundance of top-notch amenities that redefine luxury living, and our Smart House features bring convenience and efficiency to new heights. From automated lighting and temperature control to smart security systems and integrated voice assistants, your home adapts to your preferences and ensures a seamless living experience.</p>
                </div>
                <div className="icons-box">
                    {smarthouseIcons.map((icon, index) => (
                        <div className="icons-item">
                        <img src={icon} alt={`Logo ${index + 1}`} key={index} className="icon"/>
                        </div>
                    ))}
                </div>
            </section>
            <section className="roof-container"></section>
        </div>
    )
}

export default Amenities;
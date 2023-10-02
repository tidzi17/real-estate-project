import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/building/parallax.png';
import designersBg from '../../assets/building/designers.png';
import archBg from '../../assets/building/architect.jpg';

function Building(){
    return(
        <div className="building" id="building">
            <div className="landing-container">
                <div className="heading">
                <h1>The Building</h1>
                </div>
                <ScrollDown />
            </div>
            <section className="intro-container" id="first-section">
            <h3>Where Architecture Meets Vision</h3>
            <h2>Welcome to Harmony Residence</h2>
            <p>Harmony Residence is an upscale apartment complex nestled in the vibrant 
               heart of Miami, offering more than just lavish living spaces. 
               Embrace the future of urban living with our Smart House technology,
               carefully integrated into every aspect of your daily life.
            </p>
            </section>
            
            <section className="team">
            <div className="workers" id="designers">
                <div className="text-block">
                <h3>Designed by Visionary Minds</h3>
                <h2>A Visionary Design in Miami</h2>
            <p>At Harmony Residence, we take pride in curating an 
            unparalleled living experience for our esteemed residents.
            Each of the 500 apartments and penthouses has been thoughtfully
            designed to reflect the epitome of elegance and sophistication. 
            Our visionary team at Harmony Developments, led by the imaginative
            minds of designers, Rory Gilmore and Lorelai Gilmore, ensures a 
            harmonious blend of contemporary aesthetics and timeless design.</p>
                </div>
                <div className="image" style={{ backgroundImage: `url(${designersBg})` }}></div>
            </div>
            <div className="workers" id="architect">
            <div className="image"  style={{ backgroundImage: `url(${archBg})` }}></div>
            <div className="text-block">
            <h3>A Haven of Architectural Grace</h3>
            <h2>A Haven of Architectural Grace</h2>
            <p>Luke Dave, the renowned architect behind Harmony Residence,
             has poured his creative genius into every detail, crafting an
            exceptional living experience that exudes sophistication and refinement.
            With an unwavering commitment to architectural excellence, Luke Dave has
            transformed Harmony Residence into a masterpiece of modern living, where 
            each detail harmonizes to create a truly refined environment.</p>
            </div>
            </div>
            </section>
            {/* <section className="parallax">
            <Parallax className="parallax-container"
        bgImage={bgImage} 
        strength={300}
      >
        <div>
          <h2>A Smart Living Experience</h2>
        </div>
      </Parallax>
            </section> */}
           
        </div>
    )
}

export default Building;
import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/neigh/view.webp'

function Neighbourhood(){
    return(
        <div className="neighbourhood" id="neighbourhood">
            <div className="landing-container">
                <div className="heading">
                <h1>Neighbourhood</h1>
                </div>
                <ScrollDown />
            </div>
            <section className="intro-container" id="first-section">
            <h3>Ocean Serenity - Where Dreams Meet the Sea</h3>
            <h2>Discover a Coastal Retreat </h2>
            <p>Immerse yourself in the captivating serenity of ocean living 
                at Harmony Residence. With the mesmerizing waves as your 
                backdrop and the gentle sea breeze as your companion, this
                 coastal haven invites you to experience a life where dreams
                  meet the sea. Wake up to breathtaking sunrises, savor 
                  leisurely walks along sandy shores, and embrace a tranquil 
                  existence that nurtures your soul. Nestled in Miami's vibrant
                   neighborhood, this coastal retreat offers a harmonious blend
                    of urban conveniences and the raw beauty of nature. Experience
                     the essence of ocean serenity at Harmony Residence, where life's
                      wonders unfold with every tide.</p>
            </section>
            <section className="parallax">
            <Parallax className="parallax-container"
        bgImage={bgImage} 
        strength={300}
      >
        <div>
          <h2>Wake up to breathtaking sunrises</h2>
        </div>
      </Parallax>
            </section>
            <section className="block-container">
                <div className="block-item" id="mall"></div>
                <div className="block-item" id="text-block">
                <h3> Your Gateway to Urban Convenience</h3>
            <h2>Embrace the Vibrant Neighborhood</h2>
            <p>Harmony Residence offers a harmonious blend of coastal beauty and urban accessibility, placing convenience at your doorstep. Within a 10-minute walk, discover a plethora of amenities that cater to every aspect of modern living.
From top-notch schools for young minds to trendy cafes and restaurants serving delectable cuisines, the neighborhood is a culinary haven. Explore fashion-forward boutiques and cultural hotspots, enriching your experience with art, entertainment, and shopping delights.
For outdoor enthusiasts, nearby parks offer the perfect retreat, providing jogging trails and family gatherings amidst nature's beauty. Embrace a lifestyle where everything you desire is within easy reach, making each day a celebration of harmonious living.
Welcome to Harmony Residence, where coastal serenity meets urban vibrancy, crafting a neighborhood that resonates with the essence of convenient and delightful living.
                      </p>
                </div>
            </section>
        </div>
    )
}

export default Neighbourhood;
import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import { Parallax } from 'react-parallax';
import card1bg from '../../assets/neigh/card-edu.jpeg';
import card2bg from '../../assets/neigh/card-caffe.webp';
import card3bg from '../../assets/neigh/card-muse.jpeg';
import bgImage from '../../assets/neigh/beach.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faShoppingBag, faSchool, faUtensils, faDumbbell } from '@fortawesome/free-solid-svg-icons';

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
                <div className="first-section-img" style={{ backgroundImage: `url(${bgImage})` }}>
                </div>
                <div className="text-block">
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
                    of urban conveniences and the raw beauty of nature.</p>
                    </div>
            </section>
          <section className="features">
            <div className="features-item">
                <div className="features-item-img">
                <FontAwesomeIcon icon={faSun} className="icon"/>
                </div>
                <p>Beach</p>
            </div>
            <div className="features-item">
                <div className="features-item-img">
                <FontAwesomeIcon icon={faShoppingBag} className="icon"/>
                </div>
                <p>Shopping</p>
            </div>
            <div className="features-item">
                <div className="features-item-img">
                <FontAwesomeIcon icon={faSchool} className="icon"/>
                </div>
                <p>Schools & Daycare</p>
            </div>
            <div className="features-item">
            <div className="features-item-img">
                <FontAwesomeIcon icon={faUtensils} className="icon"/>
                </div>
                <p>Restaurants</p>
            </div>
            <div className="features-item">
                <div className="features-item-img">
                <FontAwesomeIcon icon={faDumbbell} className="icon"/>
                </div>
                <p>Sports</p>
            </div>
          </section>
            <section className="block-container">
                <div className="block-item" id="mall"></div>
                <div className="block-item" id="text-block">
                <h3> Your Gateway to Urban Convenience</h3>
            <h2>Embrace the Vibrant Neighborhood</h2>
            <p>Harmony Residence offers a harmonious blend of coastal beauty and urban accessibility, placing convenience at your doorstep. Within a 10-minute walk, discover a plethora of amenities that cater to every aspect of modern living.
From top-notch schools for young minds to trendy cafes and restaurants serving delectable cuisines, the neighborhood is a culinary haven. Explore fashion-forward boutiques and cultural hotspots, enriching your experience with art, entertainment, and shopping delights.
For outdoor enthusiasts, nearby parks offer the perfect retreat, providing jogging trails and family gatherings amidst nature's beauty. 
                      </p>
                </div>
            </section>
            <section className="cards">
                <h2>What's Nearby</h2>
                <div className="cards-container">
                    <div className="flip-card">
                        <div className="flip-card-front" style={{ backgroundImage: `url(${card1bg})` }}>
                            <h2>Education</h2>
                        </div>
                        <div className="flip-card-back" >
                            <ul>
                                <li>600m Elementary School</li>
                                <li>400m "Miami High School"</li>
                                <li>1.2km State College</li>
                                <li>2km College of Applied Arts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flip-card">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${card2bg})` }}>
                            <h2>Food&Drinks</h2>
                        </div>
                        <div className="flip-card-back">
                            <ul>
                            <li>50m "Potters" Caffe</li>
                            <li>350m "MacLaren's" Pub</li>
                            <li>350m "Lary's" Restaurant</li>
                            <li>500m "The Garrison" Pub</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flip-card">
                    <div className="flip-card-front" style={{ backgroundImage: `url(${card3bg})` }}>
                            <h2>Cultural</h2>
                        </div>
                        <div className="flip-card-back">
                            <ul>
                                <li>600m Museum of Modern Art</li>
                                <li>2km Museum of History</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Neighbourhood;


  {/* <section className="parallax">
            <Parallax className="parallax-container"
        bgImage={bgImage} 
        strength={300}
      >
        <div>
          <h2>Wake up to breathtaking sunrises</h2>
        </div>
      </Parallax>
            </section> */}
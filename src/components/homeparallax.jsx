import React from "react";
import image from '../assets/home/parallaximg.jpg';
import { Parallax } from 'react-parallax';
import '../styles/main.scss';

function HomeParallax() {
    return (
      <Parallax className="parallax-container"
        bgImage={image} // Replace with your image URL
        strength={400}
      >
        <div>
          <h2>Request A Tour</h2>
          <p>Get in touch with us for any questions & help.</p>
          <button>Schedule a Tour</button>
        </div>
      </Parallax>
    );
  }

export default HomeParallax;
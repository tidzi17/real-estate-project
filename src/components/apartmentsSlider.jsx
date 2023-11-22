import React, { useState } from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import '../styles/main.scss'


const ApartmentsSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
        <div className="custom-slider">
        <div className="slider-frame">
          <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Apartment photo ${index + 1}`} />
              </div>
            ))}
          </div>
          <div onClick={goToPrevSlide} className='arrow'><MdOutlineArrowBackIosNew className='arrow-icon' /></div>
          <div onClick={goToNextSlide} className='arrow' id='right'><MdArrowForwardIos className='arrow-icon' /></div>
        </div>
        
      </div>
    );
  };
  
  export default ApartmentsSlider;
import React, { useState } from "react";
import '../styles/main.scss';
import data from '../pages/apartments-page/data.json';
import ApartmentsSlider from "./apartmentsSlider";


function Offer(){
    
const secondApartment = data.apartments.find(apartment => apartment.id === 2);

const [activeContent, setActiveContent] = useState('photos');

const handleFloorPlanClick = () => {
    setActiveContent('floorPlan');
  };

  const handlePhotosClick = () => {
    setActiveContent('photos');
  };

  const handleVideoClick = () => {
    setActiveContent('video');
  };

    return(
        <div className="offer-container">
            <div className="offer-content">
                <div className="offer-content-content">
                {activeContent === 'floorPlan' && (
                        <div className="content">
                        <img src={secondApartment.floor} alt="Floor Plan" className="floorplan" />
                     </div>
                      )}
                       {activeContent === 'photos' && secondApartment.photos && (
                         <div className="content">
                          <ApartmentsSlider images={secondApartment.photos} />
                           </div>
                           )} 
                       {activeContent === 'video' && (
                      <div className="content">
                      <iframe
                         title="Apartment Video"
                         width="100%"
                         height="100%"
                         src={`https://www.youtube.com/embed/${secondApartment.video}?controls=0&autoplay=1&mute=1&showinfo=0`}
                         allowFullScreen
                         className="content-item"
                         ></iframe>
                      </div>
                         )}
                </div>
                <div className="offer-content-nav">
                <button onClick={handleFloorPlanClick}>Floor Plan</button>
                <button onClick={handlePhotosClick}>Photos</button>
                <button onClick={handleVideoClick}>Video</button>
                </div>
            </div>
            <div className="offer-info">
            <div className="info-content">
                            <h3>{secondApartment.title}</h3>
                            <ul className="info">
                                <li>Price: <span>{secondApartment.price}</span> </li>
                                <li>Apartment area: <span>{secondApartment.area}</span> </li>
                                <li>Terrace area: <span>{secondApartment.terrace}</span> </li>
                                <li>Bathroom: <span>{secondApartment.bath}</span></li>
                            </ul>
                            <p>Discover your dream home in our apartments, where aspirations become a reality. </p>
                            <div className="buttons">
                                <button>Register Interest</button>
                                <button>Schedule a Tour</button>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Offer;
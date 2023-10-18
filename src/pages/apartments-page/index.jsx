import React, { useState } from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import data from './data.json';
import img from '../../assets/apartments/1bed/floorplan.png';


function Apartments(){

    const [activeContent, setActiveContent] = useState('floorPlan');
    const [selectedApartmentType, setSelectedApartmentType] = useState('1-bedroom');

    const handleFloorPlanClick = () => {
      setActiveContent('floorPlan');
    };
  
    const handlePhotosClick = () => {
      setActiveContent('photos');
    };
  
    const handleVideoClick = () => {
      setActiveContent('video');
    };

    const apartmentsData = data.apartments;

   /*  const filteredApartments = apartmentsData.filter(apartment => {
        if (activeContent === 'floorPlan') {
            return apartment.floor;
        } else if (activeContent === 'photos') {
            return apartment.photos && apartment.photos.length > 0;
        } else if (activeContent === 'video') {
            return apartment.video;
        }
        return true;
    }); */

    const selectedApartments = apartmentsData.filter(apartment => {
        return apartment.type === selectedApartmentType;
    });

    const handleApartmentTypeClick = (type) => {
        setSelectedApartmentType(type);
    };

    const selectedApartment = selectedApartments[0];

    
    return(
        <div className="apartments" id="apartments">
            <div className="landing-container">
                <div className="heading">
                <h1>Apartments</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section" className="apartments-container">
                <div className="apartments-nav">
                    <div className="nav">
                        <ul>
                            <li onClick={() => handleApartmentTypeClick('1-bedroom')}>1 Bedroom</li>
                            <li onClick={() => handleApartmentTypeClick('2-bedroom')}>2 Bedroom</li>
                            <li onClick={() => handleApartmentTypeClick('3-bedroom')}>3 Bedroom</li>
                        </ul>
                    </div>
                    <button>Register Interest</button>
                </div>
                <div className="apartments-box">
                    <div className="ap-showoff">
                        <div className="ap-imgs">
                        {activeContent === 'floorPlan' && (
                        <div className="content">
                        <img src={selectedApartment.floor} alt="Floor Plan" className="content-item" width="100%"
                         height="100%"/>
                     </div>
                      )}
                       {activeContent === 'photos' && selectedApartment.photos && (
                       <div className="content">
                        <img src={selectedApartment.photos[0]} alt="Apartment Photo" className="content-item"/>
                        </div>
                           )}
                       {activeContent === 'video' && (
                      <div className="content">
                      <iframe
                         title="Apartment Video"
                         width="100%"
                         height="100%"
                         src={`https://www.youtube.com/embed/${selectedApartment.video}`}
                         allowFullScreen
                         className="content-item"
                         ></iframe>
                      </div>
                         )}
                        </div>
                        <div className="ap-nav">
                            <button onClick={handleFloorPlanClick}>Floor Plan</button>
                            <button onClick={handlePhotosClick}>Photos</button>
                            <button onClick={handleVideoClick}>Video</button>
                        </div>
                    </div>
                    <div className="ap-info">
                        <div className="info-content">
                            <h3>{selectedApartment.title}</h3>
                            <ul className="info">
                                <li>Price: <span>{selectedApartment.price}</span> </li>
                                <li>Apartment area: <span>{selectedApartment.area}</span> </li>
                                <li>Terrace area<span>{selectedApartment.terrace}</span> </li>
                                <li>Bathroom: <span>{selectedApartment.bath}</span></li>
                            </ul>
                            <p>Discover your dream home in our apartments, where aspirations become a reality. </p>
                            <div className="buttons">
                                <button>Register Interest</button>
                                <button>Schedule a Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="calculator"></section>
        </div>
    )
}

export default Apartments;
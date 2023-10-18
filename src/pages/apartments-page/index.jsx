import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";

function Apartments(){
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
                            <li>1 Bedroom</li>
                            <li>2 Bedroom</li>
                            <li>3 Bedroom</li>
                        </ul>
                    </div>
                    <button>Register Interest</button>
                </div>
                <div className="apartments-box">
                    <div className="ap-showoff">
                        <div className="ap-imgs"></div>
                        <div className="ap-nav">
                            <button>Floor Plan</button>
                            <button>Photos</button>
                            <button>Video</button>
                        </div>
                    </div>
                    <div className="ap-info">
                        <div className="info-content">
                            <h3>Apartment Type</h3>
                            <ul className="info">
                                <li>Price: <span>smth</span> </li>
                                <li>Apartment area: <span>smth</span> </li>
                                <li>Terrace area<span>smth</span> </li>
                                <li>Bathroom: <span>smth</span></li>
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
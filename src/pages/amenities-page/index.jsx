import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";

function Amenities(){
    return(
        <div className="amenities" id="amenities">
            <div className="landing-container">
                <div className="heading">
                <h1>Amenities</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section">
                something
            </section>
        </div>
    )
}

export default Amenities;
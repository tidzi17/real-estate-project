import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";

function Neighbourhood(){
    return(
        <div className="neighbourhood" id="neighbourhood">
            <div className="landing-container">
                <div className="heading">
                <h1>Neighbourhood</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section">
                something
            </section>
        </div>
    )
}

export default Neighbourhood;
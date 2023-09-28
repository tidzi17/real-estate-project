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
            <section id="first-section">
                something
            </section>
        </div>
    )
}

export default Apartments;
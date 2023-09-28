import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";

function Building(){
    return(
        <div className="building" id="building">
            <div className="landing-container">
                <div className="heading">
                <h1>The Building</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section">
                something
            </section>
        </div>
    )
}

export default Building;
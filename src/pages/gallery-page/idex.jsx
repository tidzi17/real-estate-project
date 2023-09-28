import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";

function Gallery(){
    return(
        <div className="gallery-page" id="gallery-page">
            <div className="landing-container">
                <div className="heading">
                <h1>Gallery</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section">
                something
            </section>
        </div>
    )
}

export default Gallery;
import React, { useState } from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import int from '../../assets/gallery/interior/1.jpg';
import int1 from '../../assets/gallery/interior/2.webp';
import int2 from '../../assets/gallery/interior/3.jpeg';
import int3 from '../../assets/gallery/interior/4.jpg';
import int4 from '../../assets/gallery/interior/5.webp';
import int5 from '../../assets/gallery/interior/6.jpg';
import int6 from '../../assets/gallery/interior/7.jpg';
import int7 from '../../assets/gallery/interior/8.jpeg';
import int8 from '../../assets/gallery/interior/9.jpg';
import int9 from '../../assets/gallery/interior/10.jpeg';
import ex from '../../assets/gallery/exterior/2.jpg';
import ex1 from '../../assets/gallery/exterior/3.png';

function Gallery(){
    const [currentCategory, setCurrentCategory] = useState("All");

    const interiorImages = [int, int1, int2, int3, int4, int5, int6, int7, int8, int9]; 
    const exteriorImages = [ex, ex1]; 

    const allImages = [...interiorImages, ...exteriorImages];

    const filteredImages =
    currentCategory === "All"
      ? allImages
      : currentCategory === "Interior"
      ? interiorImages
      : exteriorImages;

    return(
        <div className="gallery-page" id="gallery-page">
            <div className="landing-container">
                <div className="heading">
                <h1>Gallery</h1>
                </div>
                <ScrollDown />
            </div>
            <section id="first-section" className="image-gallery">
                <div className="category-buttons">
                <button onClick={() => setCurrentCategory("All")}>All</button>
                    <button onClick={() => setCurrentCategory("Interior")}>Interior</button>
                    <button onClick={() => setCurrentCategory("Exterior")}>Exterior</button>
                </div>
                <div className="gallery-items">
                {filteredImages.map((image, index) => (
                   <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="item"
                       />
                        ))}
                </div>
            </section>
        </div>
    )
}

export default Gallery;
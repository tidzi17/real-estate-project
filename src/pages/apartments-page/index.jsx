import React from "react";
import '../../styles/main.scss';
import ScrollDown from "../../components/scrollButoon";
import MortgageCalculator from "../../components/calculator";
import ApartmentsGallery from "../../components/apartments";




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
                <ApartmentsGallery />
                
            </section>
            <section className="calculator-container">
                <div className="heading">
                    <h3>Ready to buy</h3>
                    <h2>Calculate your motgage rate in simple steps</h2>
                </div>
                <div className="container">
                    <MortgageCalculator />
                </div>
                
            </section>
        </div>
    )
}

export default Apartments;
import React from "react";
import {ImHome} from 'react-icons/im';
import {BsCalendarCheck} from 'react-icons/bs';
import '../../styles/main.scss';

function Home(){
    return(
        <div className="home" id="home">
            <div className="home-container">
            <div className="heading">
            <p className="heading-text">
                    <div className="top-items">
                        <BsCalendarCheck className="icon"/>
                        <p>Ready in 2024</p>
                        <ImHome className="icon"/>
                        <p>500+ Apartments</p>
                    </div>
                Inovative Living Spaces</p>
            </div>
            <div class='scrolldown'>
                <div class="chevrons">
               <div class='chevrondown'></div>
              <div class='chevrondown'></div>
                </div>
              </div>
            </div>
            <div>else</div>
        </div>
    )
}

export default Home;
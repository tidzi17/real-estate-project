import React from "react";
import '../styles/main.scss';

function ScrollDown(){
    const handleScroll = () => {
        const section = document.getElementById('first-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <div class='scrolldown' onClick={handleScroll}>
                <div class="chevrons">
               <div class='chevrondown'></div>
              <div class='chevrondown'></div>
                </div>
              </div>
    )
}

export default ScrollDown;
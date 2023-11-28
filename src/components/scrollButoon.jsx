import React from "react";
import '../styles/main.scss';

function ScrollDown(){
    const handleScroll = () => {
        const section = document.getElementById('first-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <div className='scrolldown' onClick={handleScroll}>
                <div className="chevrons">
               <div className='chevrondown'></div>
              <div className='chevrondown'></div>
                </div>
              </div>
    )
}

export default ScrollDown;
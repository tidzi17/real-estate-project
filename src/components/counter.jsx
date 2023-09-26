import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../styles/main.scss';

const Counter = () => {
  const [couterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <div className='counter-container'>
      {/* <div className='counter-content'> */}
        <div className='counter-item'>
      <h2>
        {couterOn && <CountUp start={0} end={500} duration={2} delay={0}/>}
        +
      </h2>
      <p>Apartments</p>
      </div>
      <div className='counter-item'>
      <h2>
        {couterOn && <CountUp start={0} end={850} duration={2} delay={0}/>}
      </h2>
      <p>Parking Spots</p>
      </div>
      <div className='counter-item'>
      <h2>
        {couterOn && <CountUp start={0} end={180000} duration={2} delay={0}/>}
      </h2>
      <p>Square Meters</p>
      </div >
      <div className='counter-item'>
      <h2>
        {couterOn && <CountUp start={0} end={25} duration={2} delay={0}/>}
      </h2>
      <p>Green Spaces</p>
      </div>
      {/* </div> */}
    </div>
    </ScrollTrigger>
  );
};

export default Counter;
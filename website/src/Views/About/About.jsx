import React from 'react';
import AboutComputer from '../About/AboutComputer';
import AboutMobile from './AboutMobile';

import { useMediaQuery } from 'react-responsive';


function About() {
    const isMobile = useMediaQuery({
        query: "(min-device-width: 480px)",
        query: "(max-device-width: 1023px)"
      });
      
      const isComputer = useMediaQuery({
        query: "(min-device-width: 1024px)",
      });

    return(
        <>
            {isComputer && <AboutComputer />} 
            {isMobile && <AboutMobile />}
        </>
        
    );
}

export default About;
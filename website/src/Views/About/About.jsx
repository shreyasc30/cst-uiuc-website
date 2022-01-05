import React from 'react';
import AboutComputer from '../About/AboutComputer';
import AboutMobile from './AboutMobile';

import { useMediaQuery } from 'react-responsive';


function About() {
    // i feel like setting 480 - 1023 shouldn't work
    // but for some reason even if user screen is less than 480 px it still changes to mobile page version I am confusions
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
import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
// import ActiveHouse from '../../Components/ActiveHouse/ActiveHouse';
import ActiveHouseComputer from '../../Components/ActiveHouse/ActiveHouseComputer';
import ActiveHouseMobile from '../../Components/ActiveHouse/ActiveHouseMobile';

import { useMediaQuery } from 'react-responsive';

function Brothers() {
    // changing to 600 instead of 480 since there's some clipping at that point
    const isMobile = useMediaQuery({
        query: "(min-device-width: 600px)",
        query: "(max-device-width: 1023px)"
      });
      
      const isComputer = useMediaQuery({
        query: "(min-device-width: 1024px)",
      });

    return (
        <>
            <Navigation />
            <div className="Brothers">
                <div className="container">
                    <h1>Our Brothers</h1>
                    <p>
                        Meet the brothers of Chi Sigma Tau’s Gamma Chapter, here at the University of Illinois at Urbana-Champaign.
                        All of our brothers come from several unique walks of lives and bring a lot of different personalities to the brotherhood.
                        Yet at the same time, we are all unified by the same goal: improving ourselves and the fraternity.
                        Each of our brothers contributes to the fraternity in different ways by holding different positions.
                        Find out a little more about our active brothers and the positions they hold in the fraternity, and all the brothers in our chapter through the years!
                    </p>
                </div>
                <div className="active-house">
                    <>
                        {isComputer && <ActiveHouseComputer />}
                        {isMobile && <ActiveHouseMobile />}
                    </>
                </div>
                {/**<div className="container">
                    <h2>Gamma Line</h2>
                </div>*/}
            </div>
            <Footer />
        </>
    );
}

export default Brothers;
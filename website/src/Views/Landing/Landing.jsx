import React from 'react';

// to make it mobile-friendly
import MediaQuery from 'react-responsive';

import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function Landing() {
    return (
        <>
            <Navigation />
            {/* 
            <div>

                <h1>Device Test!</h1>
                <MediaQuery minWidth={1224}>
                    <p>You are a desktop or laptop</p>
                <MediaQuery minWidth={1824}>
                    <p>You also have a huge screen</p>
                </MediaQuery>
                </MediaQuery>
                <MediaQuery minResolution="2dppx">
                {(matches) =>
                    matches
                    ? <p>You are retina</p>
                    : <p>You are not retina</p>
                }
                </MediaQuery>
                
            </div>
            */}

            <div className="Landing">
                <div>
                    {/* don't this this is the best way to go about it but it's whatever*/}
                    <h1 className="landing-text">Leaders Not Followers</h1>

                    <img src={require('../../assets/ABCCrossing.jpg')} alt="CST"/>
                </div>
            </div>
            <div className="bottom">
            <Footer className="footer"/>
            </div>
        </>
    );
}

export default Landing;

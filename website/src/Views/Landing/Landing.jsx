import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function Landing() {
    return (
        <>
            <Navigation />
            <div className="Landing">
                <div>
                <h1 className="landing-text">Leaders Not Followers.</h1>
                </div>
            </div>
            <div className="bottom">
            <Footer className="footer"/>
            </div>
        </>
    );
}

export default Landing;

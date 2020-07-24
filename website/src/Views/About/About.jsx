import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';

function About() {
    const date = new Date();
    const years = date.getMonth() >= 9 ? date.getFullYear() - 1999 :date.getFullYear() - 1999 - 1;

    return (
        <>
            <Navigation />
            <div className="About">
                <h1>About Us</h1>
                <p>doin this ish for {years} years dude!</p>
            </div>
        </>
    );
}

export default About;

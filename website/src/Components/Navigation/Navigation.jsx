import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <header className="Navigation">
            <div className="black-container">
                <div className="title">
                    <Link to="/">
                        <img src={require('../../assets/site-crest.png')} alt="Crest"/>
                        <div className='heading'>&Chi;&Sigma;&Tau; <span className="smaller">National Fraternity, Inc.</span></div>
                    </Link>
                </div>
                <div className="chapter">
                    <div className='heading'>&Gamma; Chapter</div>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/brothers">Our Brothers</Link>
                    </li>
                    <li>
                        <Link to="/rush">Rush</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;

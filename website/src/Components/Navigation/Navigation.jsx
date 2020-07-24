import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <header className="Navigation">
            <div className="black-container">
                <div className="title">
                    <Link to="/">
                        <img src={require('../../assets/site-crest.png')} alt="Crest"/>
                        <h1>&Chi;&Sigma;&Tau; <span className="smaller">National Fraternity, Inc.</span></h1>
                    </Link>
                </div>
                <div className="chapter">
                    <h1>&Gamma; Chapter</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/active-house">Active House</Link>
                    </li>
                    <li>
                        <Link to="/community">Community</Link>
                    </li>
                    <li>
                        <Link to="/philanthropy">Philanthropy</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;

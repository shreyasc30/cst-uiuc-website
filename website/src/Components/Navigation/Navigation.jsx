import React from 'react';

function Navigation() {
    return (
        <header className="Navigation">
            <div className="black-container">
                <div className="title">
                    <img src={require('../../assets/site-crest.png')} alt="Crest"/>
                    <h1>&Chi;&Sigma;&Tau; <span className="smaller">National Fraternity, Inc.</span></h1>
                    <h2></h2>
                </div>
                <div className="chapter">
                    <h1>&Gamma; Chapter</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Active House</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li>
                        <a href="#">Philanthropy</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;

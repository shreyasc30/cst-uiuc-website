import React from 'react';

function Navigation() {
    return (
        <header className="Navigation">
            <div className="black-container">
                <div className="title">
                    {/* PUT CREST HERE */}
                    <h1>CHI SIGMA TAU</h1>
                    <h2>Nation Fraternity, Inc.</h2>
                </div>
                <div className="chapter">
                    <h1>&Gamma; Chapter</h1>
                    <h2>University of Illinois at Urbana-Champaign</h2>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Active House
                    </li>
                    <li>
                        Community
                    </li>
                    <li>
                        Philanthropy
                    </li>
                    <li>
                        Events
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;

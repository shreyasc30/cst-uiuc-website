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

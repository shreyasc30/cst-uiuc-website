import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import ActiveHouse from '../../Components/ActiveHouse/ActiveHouse';

function Brothers() {

    const EBOARD = {
        'President': 'x116phantom',
        'Vice President Internal': 'x129wilt',
        'Vice President External': 'x117tempo',
        'Treasurer': 'x119bolin',
        'Secretary': 'x127rasen',
        'Judicial': 'x114caveman',
    }

    const POSITIONS = {
        'x112intro': {
            'name': 'x112 Yun Mo "Intro" Yang',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x114caveman': {
            'name': 'x114 Justin "Caveman" Arcilla',
            'chair': ['Chapter Advisor','extra'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x116phantom': {
            'name': 'x116 Tristan "Phantom" Empalmado',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x117mustang': {
            'name': 'x117 Andre "Mustang" Castillo',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x117tempo': {
            'name': 'x117 Koji "Tempo" Wong',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x119bolin': {
            'name': 'x119 Seongsik "Bolin" Yang',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x122spirit': {
            'name': 'x122 Kurtis "Spirit" Dinh',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x126quiv': {
            'name': 'x126 Jason "Quiv" Abe',
            'chair': ['Chapter Advisor'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x127rasen': {
            'name': 'x127 Mark Andre "Rasen" Adalin',
            'chair': ['Chapter Advisor','extra', 'more'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
        'x129wilt': {
            'name': 'x129 Shreyas "Wilt" Chandrashekaran',
            'chair': ['Chapter Advisor','extra', 'more'],
            'year': 'Senior',
            'crossed': 'rhoguys (fa17)',
        },
    }

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
                    <ActiveHouse eboard={EBOARD} positions={POSITIONS}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Brothers;
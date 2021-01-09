import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function About() {
    const date = new Date();
    const years = date.getMonth() >= 9 ? date.getFullYear() - 1999 :date.getFullYear() - 1999 - 1;

    return (
        <>
            <Navigation />
            <div className="About">
                <div className="container">
                    <h1>About Us</h1>
                    <div className="group">
                        <p>
                            Chi Sigma Tau National Fraternity, Inc. is the first Asian American interest fraternity to have been founded in the Midwest.
                            Currently we have 6 chapters established across the Midwest, and the Gamma chapter of Chi Sigma Tau was founded at the University of Illinois of Urbana-Champaign on December 3, 2006.
                            Chi Sigma Tau has been dedicated to bringing the best of high school athletes and scholars together to create an elite organization.
                            Today CST can boast of Marines, MMA fighters, top high school athletes, rappers, dancers, DJ's, and most importantly, successful college graduates. Although CST is an Asian interest organization, it is NOT Asian Exclusive.
                            We welcome men of all backgrounds to join in a TRUE Brotherhood. Chi Sigma Tau takes young students and guides them to graduation and their future-- As prepared, well rounded gentlemen.
                        </p>
                        <img src={require('../../assets/sample_pic.jpg')} alt="CST"/>
                    </div>
                    <div className="group">
                        <img src={require('../../assets/sample_pic.jpg')} alt="CST"/>
                        <p>
                            Chi Sigma Tau (ΧΣΤ) (aka Chi Sigs or CST) was founded on September 9, 1999 as an Asian Interest fraternity on the campus of the University of Illinois at Chicago.
                            The history of the fraternity started on May 31, 1997, with the founding of the Asian Fraternity Association (AFA) by the principal founder Paul Ouankeo.
                            Nine other dedicated men on the campus of the University of Illinois at Chicago would come to form what is now Chi Sigma Tau.
                            The Original X Founders of Chi Sigma Tau Fraternity are:
                            Paul Phongsavanh "Papasmurf" Ouankeo
                            Pierre Somprasert "Pepe" Ouankeo
                            Chastin "Tadpole" Puray
                            Neil "Chunk" Rafol
                            Sherman "Rumpshaka" Riddick
                            Javy "Bert" Mejia
                            Jay "Ernie" Mejia
                            Ruperto "Weezer" Mercado, Jr.
                            Paul "Jackie" Tran
                            Phillips "Jordache" Tran
                        </p>
                    </div>
                    <div className="group">
                        <p>
                            On December 3rd, 2006, eight men crossed into the brotherhood of Chi Sigma Tau under the education of Paul "Pops" Ouankeo (principal founder), making history as a new colony chapter at the University of Illinois at Urbana-Champaign.
                            On October 31st, 2007, Chi Sigma Tau Fraternity at UIUC officially became recognized by the university and national board, and became known as the Gamma Chapter.
                            These eight men were:
                            Christopher "Chili" Cho
                            Iljeen "Sumo" Jo
                            Andrew "Burnz" Kwon
                            Henny "Sassoon" Lee
                            Albert "Recall" Lin
                            Jason "Captain Hero" Rhee
                            Tony "Fudd" Yang
                            Adam "Dopey" Yin
                        </p>
                        <img src={require('../../assets/sample_pic.jpg')} alt="CST"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;

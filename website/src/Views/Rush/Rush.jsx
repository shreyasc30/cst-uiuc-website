import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import RushEvent from '../../Components/RushEvent/RushEvent';

function Rush() {

    return (
        <>
            <Navigation />
            <div className="Rush">
                <div className="container">
                    <h1>Rush</h1>
                    <div className='CTA'>
                        <span className="bold">Chi Sigma Tau National Fraternity Inc. Gamma Chapter is having our Spring 2021 Rush! So be sure to come check us out!</span>
                    </div>
                    <img className='banner' src={require('../../assets/RushSchedule.jpg')} alt="Rush Schedule"/>
                    <div className='description'>
                        <span className="bold">What is rush?</span>
                        <br/>Rush is a chance for students to meet new people, have a good time, and meet the Brothers of the fraternity. It is non obligatory and FREE. So feel more than welcome to bring your friends and check us out.
                        <br/><br/><span className="bold">COVID GUIDELINES:</span>
                        <br/>*All attendees are required to comply with school COVID guidelines
                        <br/>*We WILL BE ABIDING and FOLLOWING Champaign’s emergency orders
                        <br/><br/><span className="bold">RUSH SCHEDULE:</span>
                        <br/>**All Zoom codes and passwords will be the same except the event on 1/29**
                        <br/>Meeting ID: 846 9659 2964 Password: chisigs
                        <br/>Time zone for all events are <span className="bold">CST</span>.
                    </div>
                    <div className="sched">
                        <div className="week">
                            <RushEvent
                                title='Skribbl.io w/ Bros'
                                date='1/26' time='6:00 -7:30PM'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc='Start off the first week of school by meeting our brothers through a series of drawing and guessing games!'
                                />
                            <RushEvent
                                title='Jackbox Games w/ Bros'
                                date='1/27' time='6:00 -7:30PM'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc='Missed the first virtual game night? No worries! Join us as we split into groups to play some fun Jackbox games!'
                                />
                            <RushEvent
                                title='Speed Friending w/ aKDPhi'
                                date='1/29' time='6:00 - 7:30PM'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc='One of the perks of being a brother of Chi Sigma Tau is the wide connections you can establish. Hangout with us and the lovely sisters of alpha Kappa Delta Phi as we do rounds of speed friending!'
                                />
                            <RushEvent
                                title='Informational'
                                date='1/30' time='4:00PM'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc='The first informational of our recruitment process. A chance to get to learn about the work behind the scenes, positions of our chapter, and a brief history of our organization. We will be having a Q&A session at the end. Must attend at least 1 informational to qualify for an interview.'
                                />
                        </div>
                            <div className="week">
                            <RushEvent
                                title='Bonfire w/ Bros'
                                date='2/2' time='8:00 - 10:00PM' location='TBD'
                                desc='Begin week two of recruitment with us and come see what Chi Sigma Tau is all about!'
                                />
                            <RushEvent
                                title='Informational'
                                date='2/4' time='4:00PM'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc="The second informational of our recruitment process. If you weren't able to attend the one the week before, now is your chance. Come learn about our organization and the values that we stand for. Just like the first informational, we will be having a Q&A session at the end. Must attend at least 1 informational to qualify for an interview."
                                />
                            <RushEvent
                                title='Chill w/ Bros' date='2/4' time='6:00 - 7:30PM' location='TBD'
                                desc='Our second to last event will emphasize one of our pillars: Brotherhood. Come through to hangout with our bros for a chill night filled with fun activities!'
                                />
                            <RushEvent
                                title='CST Olympics' date='2/5' time='10:00PM' location='TBD'
                                desc='As rush comes to a close, we want one last chance to get to know you all! Let’s see if you can keep up with our brothers at CST Olympics!'
                                />
                            </div>
                        </div>
                        
                        <RushEvent
                                title='Interviews' date='2/6 - 2/7' time='Contact a Rush Chair to Schedule'
                                location='ZOOM || Meeting ID: 846 9659 2964 Password: chisigs'
                                desc='Must have attended at least two recruitment events and one informational. Zoom link will be sent upon interview date.'
                                />
                    <div className='contact'>
                        <span className="bold">Have a question? Contact our rush chairs!</span>
                        <br/>779-456-9661 || Carl Dela Cruz
                        <br/>630-853-6455 || Inhoo Kim
                        <br/>217-419-9666 || Trey Zarraga
                        <br/>630-277-7366 || Ethan Ang
                        <br/>217-819-2366 || Samuel Li
                        <br/><br/><span className="bold">Want to get ahead of the game? Fill out our <a href='https://tinyurl.com/UIUCCST-Spring2021Rush' target='_blank' className='rush-form'>pre-interest form</a> and a rush chair will contact you shortly!</span>
                        <br/>All events are FREE and NON-OBLIGATORY!
                        <br/>*A minimum of 2 events and 1 informational must be attended in order to be considered for an interview.*
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Rush;
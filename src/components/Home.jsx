import React, { useState, useEffect } from 'react';
import { Zoom } from "react-awesome-reveal";
// import Carousel from 'react-bootstrap/Carousel';
// import dev1 from '../Images/dev1.jpg';
// import dev2 from '../Images/dev4.jpg';
// import dev3 from '../Images/dev5.jpeg';
// import myphoto from '../Images/krushna.JPG';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Certificate from './Certificate';
// import resume from './MyResume.pdf';
import checkresume from './CheckResume.pdf'

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = " Web Developer";

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayText(prev => {
                if (currentIndex === fullText.length) {
                    currentIndex = 0;
                    return '';
                }
                const newText = fullText.substring(0, currentIndex + 1);
                currentIndex++;
                return newText;
            });
        },800);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container-fluid home-bg">
                <div className="col-md-12 col-sm-12 inner-div">
                    <div className='inner-bg '>
                        <div className="row">
                            <Zoom  duration={2000}  > 
                            <div className="col-md-12 text-center col-sm-4 my-5">
                                <div style={{ padding: '50px' }}>
                                    <h1 className='' style={{ color: 'black' }}>I am FullStack<span style={{ color: 'RGB(218 43 54)' }}>{displayText}</span></h1>
                                    <h4 className='my-4' style={{ color: 'black' }}>Krushna <span style={{ color: 'RGB(218 43 54)' }}>Waghumbare</span></h4>
                                    <div className='my-4'>
                                        <button className='btn btn-warning btncss' >
                                            <a href={checkresume}  target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>About Info</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Project />
            <Certificate />
            <Contact />
        </>
    );
}

export default Home;

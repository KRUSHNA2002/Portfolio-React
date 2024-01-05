import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dev1 from '../Images/dev1.jpg';
import dev2 from '../Images/dev4.jpg';
import dev3 from '../Images/dev5.jpeg';

// component

import About from './About';
import Project from './Project';
import Contact from './Contact';

const Home = () =>{
    return(
        <>
               <Carousel data-bs-theme="white" className='homeslide'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        style={{height:'500px'}}
                        src={dev1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}>Hello EveryOne</h5>
                        <h4>I am Full-Stack Web Developer</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        style={{height:'500px'}}
                        src={dev2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}>Information</h5>
                        <h4>My Name is Krushna Rajendra Waghumbare</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 "
                        style={{height:'500px'}}
                        src={dev3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}>Qualification</h5>
                        <h4>
                            Now Currently studying in master of computer application from SPPU University
                        </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <About/>
                <Project/>
                <Contact/>
        </>
    );
}

export default Home;
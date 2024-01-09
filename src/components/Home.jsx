// import React , {useState,useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dev1 from '../Images/dev1.jpg';
import dev2 from '../Images/dev4.jpg';
import dev3 from '../Images/dev5.jpeg';

// component

import About from './About';
import Project from './Project';
import Contact from './Contact';
import Certicate from './Certificate';

const Home = () =>{

    // const [count, setCount] = useState("Krushna Waghumbare");
    // useEffect(() => {
    //     const strarr = count.split("");
        
    //     let currentIndex = 0;
    
    //     const intervalId = setInterval(() => {
    //       setCount(prevCount => {
    //         // Update the state with the current character
    //         const updatedCount = prevCount + strarr[currentIndex];
    
    //         // If the entire string is displayed, clear the interval
    //         if (currentIndex === strarr.length - 1) {
    //           clearInterval(intervalId);
    //         }
    
    //         currentIndex++;
    //         return updatedCount;
    //       });
    //     }, 5000);
    
    // })



    

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
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}>Krushna Waghumbare</h5>
                        <h4></h4>
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
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}>Full-Stack Web Developer</h5>
                        <h4></h4>
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
                        <h5 style={{fontSize:'40px',fontFamily:'bold'}}> Master of Computer Application</h5>
                        <h4>
                           
                        </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <About/>
                <Project/>
                <Certicate/>
                <Contact/>
        </>
    );
}

export default Home;
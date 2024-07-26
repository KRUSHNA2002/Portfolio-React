import React from 'react';
// import mypic from '../Images/mypic.JPG';
// import myphoto from '../Images/myphoto.jpg'
import myphoto from '../Images/document photo1.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Slide } from "react-awesome-reveal";


const About = () => {
  return (
    <>
      <div className="container my-4" id='about'>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <Slide duration={2000} direction='left' >
              <img src={myphoto} alt="" style={{ height: '500px', width: '100%', borderRadius: '30px' }} />
            </Slide>
          </div>
          <div className="col-md-7 col-sm-12">
            <Slide duration={2000} direction='right' >

              <div style={{ padding: '40px' }}>
                <h1>About me</h1>
                <h3><span style={{ color: 'red' }}>Designer </span>& Developer</h3>
                <p> I'm a creative thinker and problem solver. With a background in FullStack Web Developer , I thrive on exploring new ideas and finding innovative solutions. Whether it's writing, coding, or diving into new projects, I'm dedicated to continuous learning and making a positive impact."</p>
                <h1 style={{ fontFamily: 'Kalam' }}>Skills :</h1>
                <div className="row">
                  <div className='col-md-4 col-sm-6'>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>REACT.JS : </pre><ProgressBar animated label={90}  variant="success" now={90} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>ANGULAR.JS  : </pre><ProgressBar animated label={80} variant="success" now={80} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>JAVASCRIPT : </pre><ProgressBar animated label={90} variant="success" now={90} /></p>
                  </div>
                  <div className='col-md-4 col-sm-6'>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>NODE.JS : </pre><ProgressBar animated label={80} variant="success" now={80} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>PHP  : </pre><ProgressBar animated label={70} variant="success" now={70} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>DATABASE : </pre><ProgressBar animated label={90} variant="success" now={90} /></p>
                  </div>
                  <div className='col-md-4 col-sm-6'>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>HTML : </pre><ProgressBar animated label={95} variant="success" now={95} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>CSS  : </pre><ProgressBar animated label={95} variant="success" now={95} /></p>
                    <p><pre style={{ color: 'black', fontWeight: 'bold' }}>BOOTSTRAP: </pre><ProgressBar animated label={95} variant="success" now={95} /></p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>

  );
}

export default About;
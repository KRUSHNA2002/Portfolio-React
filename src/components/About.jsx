import React from 'react';
import mypic from '../Images/mypic.JPG';
import ProgressBar from 'react-bootstrap/ProgressBar';


const About =()=>{
    return(
        <>
          <div className="container my-4">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                   <img src={mypic} alt="" style={{height:'500px',width:'100%',borderRadius:'30px'}} />
              </div>
              <div className="col-md-7 col-sm-12">
                   <div style={{padding:'40px'}}>
                      <h1>About me</h1>
                      <h3><span style={{color:'red'}}>Designer </span>& Developer</h3>
                      <p> I'm a creative thinker and problem solver. With a background in FullStack Web Developer , I thrive on exploring new ideas and finding innovative solutions. Whether it's writing, coding, or diving into new projects, I'm dedicated to continuous learning and making a positive impact."</p>
                      <h1 style={{fontFamily:'Kalam'}}>Skills :</h1>
                       <div className="row">
                       <div className='col-md-6 col-sm-6'>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>HTML : </pre><ProgressBar variant="danger" now={95} /></p>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>CSS  : </pre><ProgressBar variant="danger" now={70} /></p>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>JAVASCRIPT : </pre><ProgressBar variant="danger" now={70} /></p>
                      </div>
                      <div className='col-md-6 col-sm-6'>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>PHP : </pre><ProgressBar variant="danger" now={70} /></p>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>REACT  : </pre><ProgressBar variant="danger" now={70} /></p>
                          <p><pre style={{color:'black',fontWeight:'bold'}}>NODE.JS : </pre><ProgressBar variant="danger" now={50} /></p>
                      </div>
                       </div>
                   </div>
              </div>
            </div>
          </div>
          </>

    );
}

export default About;
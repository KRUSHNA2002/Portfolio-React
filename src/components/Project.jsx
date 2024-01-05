import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Myproject from '../project';

const Project =()=>{
    return(
       <>
         <div className="container">
           <div className=' d-flex justify-content-center text-secondary my-3'>
             <h1>My Projects</h1>
           </div>
           <div className="row ">
              {
                Myproject.map((val , i )=>{
                    return(
                      <div className="projectimg1 col-md-4 col-sm-12 my-4 d-flex justify-content-center align-item-center" key={i}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img className='projectimg' variant="top" src={Myproject[i].cover} />
                        <Card.Body>
                          <Card.Title>{Myproject[i].name}</Card.Title>
                          <Card.Text>
                           <p>{Myproject[i].desc}</p>
                          </Card.Text>
                          <a href={Myproject[i].link} target="_blank" className='projectbtn btn '>Live Demo</a>
                        </Card.Body>
                      </Card>
                      </div>
                    )
                })
              }

           </div>
         </div>
       </>

    );
}

export default Project;
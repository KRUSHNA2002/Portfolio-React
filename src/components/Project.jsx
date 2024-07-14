import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Zoom } from "react-awesome-reveal";
import Myproject from '../project';

const Project = () => {
  return (
    <>
      <div className="container">
        <div className=' d-flex justify-content-center text-secondary my-3'>
          <h1>PROJECTS</h1>
        </div>
        <div className="row ">
          {
            Myproject.map((val, i) => {
              return (
                <div className="projectimg1 col-md-4 col-sm-12 my-4 d-flex justify-content-center align-item-center" key={i}>
                  <Zoom  duration={1000} >
                    <Card style={{ width: '18rem' }}>
                      <Card.Img className='projectimg' variant="top" src={Myproject[i].cover} />
                      <Card.Body>
                        <Card.Title>{Myproject[i].name}</Card.Title>
                        <Card.Text style={{ height: '120px' }}>
                          <p>{Myproject[i].desc}</p>
                        </Card.Text>
                        <a href={`${!val.link ? Myproject[i].link : Myproject[i].link}`} target="_blank" rel="noreferrer" className='projectbtn btn '>{val.btnname}</a>
                      </Card.Body>
                    </Card>
                  </Zoom>
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
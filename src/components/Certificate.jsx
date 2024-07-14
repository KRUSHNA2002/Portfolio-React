import React from 'react';
import MyCertificate from '../certificate';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Zoom } from "react-awesome-reveal";


const Certicate = () => {
  return (
    <>

      <div className="container ">
        <div className=' certificateheading mb-4'>
          <h1 className='text-center'>CERTIFICATES</h1>
        </div>
        <div className="row">
          {
            MyCertificate.map((val, i) => {
              return (
                <div key={i} className=" col-lg-4 col-md-6 col-sm-12 my-3 certificate">
                  <Zoom duration={1000}  >
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={val.cover} style={{ height: "200px" }} />
                      <Card.Body>
                        <Card.Title>{val.name}</Card.Title>
                        <Card.Text style={{ height: "100px" }} >
                          {val.desc}
                        </Card.Text>
                        <Button variant="primary"  ><a href={val.link} target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>View Certificate</a></Button>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  );
}
export default Certicate;
import React from 'react';
import MyCertificate from '../certificate';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Certicate=()=>{
    return(
       <>
       
         <div className="container">
          <div className=' certificateheading'>
            <h1 className='text-center'>Certificates</h1>
          </div>
          <div className="row">
                {
                  MyCertificate.map((val , i)=>{
                    return(
                      <div className="col-md-4 my-3">
                            <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={val.cover} style={{height:"200px"}} />
                              <Card.Body>
                                <Card.Title>{val.name}</Card.Title>
                                <Card.Text style={{height:"100px"}} >
                                   {val.desc}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                              </Card.Body>
                            </Card>
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
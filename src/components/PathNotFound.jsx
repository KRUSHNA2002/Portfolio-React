import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const PageNotFound =()=>{
    return(
        <>
          <div className="container">
                <div className='spinner'>
                    <h1>PageNotFound</h1>
                </div>
             <div className="col-md-12 col-sm-12 spinner1">
                <Spinner animation="grow" variant="secondary" />
                &nbsp;&nbsp;
                <Spinner animation="grow" variant="secondary" />
                &nbsp;&nbsp;
                <Spinner animation="grow" variant="dark" />
             </div>
          </div>
        </>
    );
}

export default PageNotFound;
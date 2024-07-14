import React from 'react';

const Footer = () => {
    return (
        <div className="container mb-5">

            <div className='text-center' >
                <p>  <span className='fw-bold' >FOLLOW ON US</span> 
                    <a href="https://github.com/KRUSHNA2002"><i className='fa fa-github' style={{ fontSize: '25px', padding: '10px' }} ></i></a>
                    <a href="https://www.hackerrank.com/profile/waghumbarekrush1"><i className='fab fa-hackerrank' style={{ fontSize: '25px', padding: '10px' }} ></i></a>
                    <a href="linkedin.com/in/krushna-waghumbare-ab2753245"><i className='fa fa-linkedin' style={{ fontSize: '25px', padding: '10px' }} ></i></a>
                </p>
                <p>
                   
                </p>
            </div>
            <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                {/* <p>Developed by <span style={{ color: 'red' }}><strong>Waghumbare Krushna</strong></span></p> */}
                <p>&copy; 2024 Krushna Waghumbare . All rights reserved.</p>

            </div>
        </div>
    );
}

export default Footer;
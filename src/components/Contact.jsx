import React from 'react';
import Footer from './Footer';

const Contact =()=>{

    return(

        <>
          <div className="container">
            <div className='contactheading'>
              <h1>Contact Us</h1>
            </div>
            <form action="https://formspree.io/f/mgegenzk" method='POST'>
                <div className="row contactform">
                  <div className="col-md-6 col-sm-12" >
                      <input className='form-control' required name='name' type="text" placeholder='Enter your Name'   />
                  </div>
                  <div className="col-md-6 col-sm-12" >
                      <input className='form-control' required name='email' type="email" placeholder=' Enter your Email' />
                  </div>
                  <div className="col-md-6 col-sm-12" >
                      <input className='form-control' required name='mobile' type="text" placeholder=' Enter your mobile No' />
                  </div>
                  <div className="col-md-6 col-sm-12" >
                      <input className='form-control' required name='profile' type="link" placeholder='Enter Your Profile Link' />
                  </div>
                  <div className="col-md-12" >
                      <input className='form-control' required name='msg' type="text" placeholder='Enter Your Message' />
                  </div>
                  <div className="col-md-12 my-5 text-center " >
                      <button type='submit'  className='btn btn-primary'> Send Me</button>
                  </div>
                </div>
                
            </form>
          </div>
          
          <Footer/>
        </>


    );
}

export default Contact;
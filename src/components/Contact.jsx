import React from 'react';
import Footer from './Footer';
import blog from '../Images/blog.mp4'
import { Slide ,Zoom} from "react-awesome-reveal";

const Contact = () => {

    return (

        <>
            <div className="container" id='contact'>
                <div className='contactheading'>
                    <h1>Contact Us</h1>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 my-5 ">
                        <Slide direction='left' duration={1000} >
                        <iframe title="Unique Title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.588573797173!2d74.01790624209553!3d18.574380115791968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c300317ee4ff%3A0xdd13543dbfcaeb9b!2sTRONSoftech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1729849394928!5m2!1sen!2sin" width="100%" height="450"  loading="lazy" ></iframe>
                        </Slide>
                    </div>
                    <div className="col-md-6 col-sm-12 my-3">
                        <Slide direction='right' duration={1000}>
                        <video width="100%" height="430px" controls>
                            <source src={blog} type="video/mp4"></source>
                        </video>
                        <div className='text-center text-muted my-2'>
                            <h4>All projects explain in short video</h4>
                        </div>
                        </Slide>
                    </div>
                </div>
              <Zoom duration={2000} > 
                <form action="https://formspree.io/f/mgegenzk" method='POST'>
                    <div className="row contactform">
                        <div className="col-md-6 col-sm-12" >
                            <input className='form-control' required name='name' type="text" placeholder='Enter your Name' />
                        </div>
                        <div className="col-md-6 col-sm-12" >
                            <input className='form-control' required name='email' type="email" placeholder=' Enter your Email' />
                        </div>
                        <div className="col-md-6 col-sm-12" >
                            <input className='form-control' required name='mobile' type="text" placeholder=' Enter your mobile No' />
                        </div>
                        <div className="col-md-6 col-sm-12" >
                            <input className='form-control' name='profile' type="link" placeholder='Enter Your Profile Link' />
                        </div>
                        <div className="col-md-12" >
                            <input className='form-control' required name='msg' type="text" placeholder='Enter Your Message' />
                        </div>
                        <div className="col-md-12 my-5 text-center " >
                            <button type='submit' className='btn btn-primary'> Send Me</button>
                        </div>
                    </div>

                </form>
                </Zoom>
            </div>

            <Footer />
        </>


    );
}

export default Contact;
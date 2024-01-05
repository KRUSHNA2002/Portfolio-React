import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import { NavLink } from 'react-router-dom';
import resume from './updated resume.pdf';

const MyNavbar = () =>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className='nav-link' to="/"><span style={{fontSize:'30px'}}><span style={{color:'red'}}>Port</span>Folio</span></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navname">
               <NavLink className='nav-link' to='/'><i className="fa-solid fa-house"></i>  Home</NavLink>
               <NavLink className='nav-link ' to='/about'><i className="fa-solid fa-address-book"></i>  About</NavLink>
               <NavLink className='nav-link' to='/project'><i className="fa-solid fa-file"></i>  Project</NavLink>
               <NavLink className='nav-link ' to='/contact'><i className="fa-solid fa-phone"></i> Contact </NavLink>
               <a href={resume} className=' nav-link' target='_blank'><i className='fa-solid fa-download'></i> Download Resume</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default MyNavbar;
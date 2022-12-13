import React from "react";
// import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavTab = () => {
    return(
      <>
      <Navbar className='navbar' variant='dark'>
      <Container>
        <Navbar.Brand href="/" className="logo">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className='choice'>Home</Nav.Link>
          <Nav.Link href="/login" className='choice'>Sign In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
</>
    );
}

export default NavTab
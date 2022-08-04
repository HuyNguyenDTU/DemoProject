import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import React from 'react';
function NavBarTop() {
    const user = true;
    if(user){
        return ( 
        <Navbar bg="primary" variant="dark">
                <Container>
                
                <Navbar.Brand as={Link} to={'/home/'} >NCC</Navbar.Brand>
                <Nav className="me-auto">
                    
                    <Nav.Link as={Link} to={'/home'} >Product</Nav.Link>
                    <Nav.Link as={Link} to={'/management'} >Management</Nav.Link>
                </Nav>
                <Nav> <Nav.Link as={Link} to={'/management'} >Logout</Nav.Link>
                    <Nav.Link  >UserName</Nav.Link>
                </Nav>
                </Container>
        </Navbar>
     );
    }
    else{
        return ( 
            <Navbar bg="primary" variant="dark">
                    <Container>
                    
                    <Navbar.Brand as={Link} to={'/home/'} >NCC</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link as={Link} to={'/home'} >Product</Nav.Link>
                        <Nav.Link as={Link} to={'/management'} >Management</Nav.Link>
                    </Nav>
                    <Nav> <Nav.Link as={Link} to={'/management'} >Login</Nav.Link>
                        
                    </Nav>
                    </Container>
            </Navbar>
         );
    }
    
}

export default NavBarTop;
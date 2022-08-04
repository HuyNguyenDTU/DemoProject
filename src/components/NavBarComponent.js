import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Management from './Management';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
function NavBarComp() {
  return (
    <>
        {/* <Router> */}
                <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to={'/home/'} >NCC</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/home'} >Product</Nav.Link>
                    <Nav.Link as={Link} to={'/management'} >Management</Nav.Link>
                </Nav>
                </Container>
                </Navbar>
            {/* </Router> */}
    </>
        
      
  );
}

export default NavBarComp;
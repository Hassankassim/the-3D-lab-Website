import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/icons/logo-no-background.png'
import cross from '../assets/icons/icons8-cross-100.png'
function Reactnavbar() {
  return (
    <>
      {[ 'sm' ].map((expand) => (
        <Navbar id='transnav' key={expand} expand={expand}  >
          <Container fluid>
            <Navbar.Brand href="/"><a className='logonav san'><img width={"70px"} src={logo} alt="nexa" />3DLab&Robotics</a></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
             <Offcanvas.Header closeButton>
  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    <a href='/' className='bg-primary'><img width={"50px"} src={cross} alt="" /></a>
  </Offcanvas.Title>
  <button type="button" className="btn-close btn-primary" aria-label="Close"></button>
</Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 san">
                  <Nav.Link className='navli' id ='roboto' href="/About">About Us</Nav.Link>
                  <Nav.Link className='navli' id ='roboto' href="#footer">Our Team</Nav.Link>
                  <Nav.Link className='navli' id ='roboto' href="#footer">Call Us</Nav.Link>
                  <span className="d-flex">
                  
                </span>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Reactnavbar;
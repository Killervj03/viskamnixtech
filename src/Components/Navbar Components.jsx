import React, { Component } from 'react';
import { Nav, Navbar, Container,  } from 'react-bootstrap';





export default class NavbarComp extends Component {
    render() {
        return (
            <>
                            <div align ="center">
                    <Navbar expand="lg" bg="primary" variant="dark" fixed='top'>
                        <Container>
                            <Navbar.Brand href="#home"><h3>VISKAMNIX  Technologies </h3></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#Home"><h5>Home </h5>
                                    </Nav.Link>
                                    <Nav.Link href="#Our Services"><h5>Our Services </h5></Nav.Link>
                                    <Nav.Link href="#Our Team "> <h5>Our Team  </h5></Nav.Link>

                                    <Nav.Link href="#Trainingconsulting"><h5>Training-Consulting </h5></Nav.Link>
                                    <Nav.Link href="#About Us "> <h5>About Us  </h5></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                  
                </div>
               






            </>

        )
    }
}
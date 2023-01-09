import React, { Component } from 'react';
import { Card, Form, Button, Nav } from 'react-bootstrap';



export default class Aboutus extends Component {
    render() {
        return (

            <div className='About Us' id='About Us'>
                <div id="example1">
                    <h2>About us </h2>
                </div>

                <div className="d-flex justify-content-around">
                    <Card><b>
                        <h2>COMPANY FORM: </h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="Name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Querys</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </b> </Card>

                    <Card>
                        <h2>CONTACT DETAILS:</h2>

                        <Card.Body>
                            <h3>VISKAMNIX  TECHNOLOGY   </h3>
                            Skill Development & Engineering Services.   Upgrade your Design, Software & Programming Skills
                            <Card.Title>(Mechanical , ECE ,EEE,CIVIL</Card.Title>
                            <Card.Title> ,CSE,&IT ,MINING& GEOLOGY, </Card.Title>
                            <Card.Title> MULTIMEDIA, CORE TECHNOLOGY, </Card.Title>
                            <Card.Title>   ART'S & ACCOUNT'S ,.... Etc,)</Card.Title>


                            <Card.Text>
                                We provide Software Training, project Works , placement Training,</Card.Text>
                            <Card.Text>  Get Experience Certificate & enlighten Your Career
                            </Card.Text>

                            <Card.Title>  (INDUSTRIAL CADD TRAINING & JOB PLACEMENT CENTRE) </Card.Title>
                            <Card.Text>We Provide Industry Based Training On Research & Development Field
                                CAD | CAM | CAE Training</Card.Text>
                        </Card.Body>
                    </Card>
                </div>



                <footer class="footer-distributed">

                    <div class="footer-left">

                        <h3>VISKAMNIX<span>TECHNOLOGY</span></h3>

                        <p class="footer-links">


                            <Nav.Link href="#Home"><h6>Home |</h6>
                            </Nav.Link>
                            <Nav.Link href="#Our Services"><h6>Our Services | </h6></Nav.Link>
                            <Nav.Link href="#Our Team "> <h6>Our Team | </h6></Nav.Link>

                            <Nav.Link href="#Trainingconsulting"><h6>Training-Consulting  |</h6></Nav.Link>
                            <Nav.Link href="#About Us "> <h6>About Us   </h6></Nav.Link>




                        </p>

                        <p class="footer-company-name">Company Name © 2022</p>

                    </div>

                    <div class="footer-center">

                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>No:3/43, MGR Street, Rajiv Gandhi Salai,OMR ,Karapakkam,</span>
                                <span> Opposite to Capgemini,Shollinganallur,
                                </span>Chennai-600097, India  </p>
                        </div>

                        <div>
                            <i class="fa fa-phone"></i>
                            <p> <span>+917305209390,</span>
                             <span>+91 7200479030 </span></p>
                        </div>

                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:profenaa.omr@gmail.com">profenaa.omr@gmail.com</a></p>

                        </div>
                        <div>
                            <a href='https://api.whatsapp.com/send/?phone=%2B917200479030&text&type=phone_number&app_absent=0'><img src={require('../images/WhatsApp.png')} alt="logo" width={50} /></a>
                            <a href='https://www.instagram.com/viskamnixtech/'><img src={require('../images/instagram.png')} alt="logo" width={50}  /></a>
                            <a href='https://www.facebook.com/profile.php?id=100089003064918'><img src={require('../images/Facebook.png')} alt="logo" width={50} /></a>
                            <a href='https://www.linkedin.com/in/viskamnix-technology-254274261/'><img src={require('../images/Linkedin.png')} alt="logo" width={50}  /></a>
                           //* <a href='https://youtu.be/X0ss4GI0RCA'><img src={require('../images/Youtube.png')} alt="logo" width={50}  /></a>*//
                        </div>

                    </div>

                    <div class="footer-right">

                        <p class="footer-company-about">
                            <span>About the company</span>
                            VISKAMNIX TECHNOLOGY  We can provide Training Placement & Engineering Services and development services
                            Training means Software Related to Mechanical
                            Civil.
                            Electrical .
                            Computer Core.and
                            Multimedia</p>


                           



                    </div>

                </footer>



            </div>

        )
    }
}

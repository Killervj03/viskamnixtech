import React, { Component } from 'react'

import { Container, Carousel, } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className='Home' id='Home'>
                <div>
                    <h1>
                        <Container>

                            <Carousel>

                                <Carousel.Item>
                                    <center> <img
                                        className="d-block w-100"
                                        src="./images/VISKAM1.jpg"
                                        alt="First slide"
                                    /></center>

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./images/VISKAM2.jpg "
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./images/VISKAM3.jpg"
                                        alt="Third slide"

                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p>

                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./images/VISKAM4.png "
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </h1>
                </div>
                <div id="example2">
                    <marquee width="90%" direction="left" height="100px">
                        <h4> VISKAMNIX  TECHNOLOGY    We Provide Industry Based Training On Research & Development Field
                            CAD | CAM | CAE Training
                            👉OFFLINE + ONLINE VIRTUAL CLASSES
                            👉50,000+ students trust our offline + online courses
                            👉90% students got placed in Design & Software field.
                            👉Internship|Experience Certificates
                            👉15 +  Franchise @ TamilNadu
                            ➡️ Design Job oriented Training on
                            ✔️Mechanical CAD/CAM/CAE
                            ✔️ Civil CAD/Revit/ sketch Up/STAAD
                            ✔️ Electrical Embedded/PCB/VlSI/IoT
                            ✔️Computer Core Python/Java/Html/Tally.
                            ✔️Multimedia Photoshop/After effects
                            *Associate with Profenaa Industrial Training Centre for an 💰insane 30% OFF discount!
                            🔥 Authorized Certificates are globally accepted and recognized
                            🔥 Become Eligible for Job, Freelancing or Business
                            🔥 Hurry up. Don’t miss this opportunity. </h4>
                    </marquee>
                </div>
            </div>
        )
    }
}
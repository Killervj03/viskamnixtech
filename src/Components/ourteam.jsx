import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';

import Slider from "react-slick";




export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear"

        };

        return (
            <div className='Our Team' id='Our Team'>


                <div id="example1">
                    <h2>Our Team</h2>
                </div>
                <Container>

                    <center> <h2>Our office Colleague</h2></center>
                    <Slider {...settings}>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="./Photo.jpg" width={500} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name:vijay</h3>
                                        <Card.Title>Card Title</Card.Title>


                                        <Card.Text>
                                        If you fell down yesterday stand up today:
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="/Photo1.jpeg" width={500} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name: Celva</h3>
                                        <Card.Title>Managing Director</Card.Title>


                                        <Card.Text>
                                            Everyone has opportunities and different doors that are opened to them in different ways. In the end, if you're talented you'll
                                            get work, if you're not, you won't, so it doesn't really matter who you know.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="/Photo2.jpg" width={500} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name:vijay</h3>
                                        <Card.Title>TEAM LEADR</Card.Title>
                                        <Card.Title>Senior Front end Developer</Card.Title>


                                        <Card.Text>
                                            When you focus on problem You will have more problems When you focus on possibilities You will have more opportunities..
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="/Subaritha.png" width={250} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name:Subaritha</h3>
                                        <Card.Title>BACKEND Developer </Card.Title>

                                        <Card.Text>
                                            When you lose interest in a program, your last duty to it is to hand it off to a competent successor.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="/Bharathi.png" width={500} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name:Bharathi </h3>
                                        <Card.Title>Front end Developer</Card.Title>


                                        <Card.Text>
                                            He who knows how to think does not need advice; He who knows how to face adversity has no failure in life\.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '45rem' }}>
                                    <Card.Img variant="top" src="/Sapapathi.png" width={500} />

                                </Card>

                                <Card>

                                    <Card.Body>
                                        <h3>Name:Sapapathi</h3>
                                        <Card.Title>Pyton Developer</Card.Title>


                                        <Card.Text>
                                            You can't reach your full potential until you learn to live your life in the present.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
        );



    }
}

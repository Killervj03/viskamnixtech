import React, { Component } from 'react'
import { Button, Card, } from 'react-bootstrap';


export default class OurServices extends Component {
    render() {
        return (
            <div className='Our Services' id='Our Services'>
            <center>
                <h1>
                    Our Services
                    </h1>
                </center>
                   
                <div id="example1">
                <h2>  IT CONSULTING </h2>
                </div>


                <div className="d-flex justify-content-around">
                    <Card style={{ width: '23rem' }}>
                        <Card.Img variant="top" src="/web2.pNg" />
                        <Card.Body>
                            <Card.Title>Website Development</Card.Title>
                            <Card.Text>
                                We can build your Dream and Imagine Project with Ourteam and
                                Technical group and Support to make full Fill the Website Developing .
                            </Card.Text>
                            <Button variant="success">Let's Start</Button>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="/App1.pNg" />
                        <Card.Body>
                            <Card.Title>APP Development</Card.Title>
                            <Card.Text>
                                We can build your Dream and Imagine Project with Ourteam and
                                Technical group and Support to make full Fill the App Developing  .
                            </Card.Text>
                            <Button variant="success">Let's Start</Button>
                        </Card.Body>
                    </Card>

                </div>


                <div id="example1">

                <h2> SOFTWARE TRAINING  </h2>
                </div>


                <div className="d-flex justify-content-around">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="/Engserveices.pNg" />
                        <Card.Body>
                            <Card.Title>Engineering Services</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Let's Start</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="/ITS.pNg" />
                        <Card.Body>
                            <Card.Title>Information Technology
                                Services
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Let's Start</Button>
                        </Card.Body>
                    </Card>

                </div>



            </div>
        )
    }
}
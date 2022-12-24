import React, { Component, } from 'react'
import { Button, Container, Card } from 'react-bootstrap';



export default class Trainingconsulting extends Component {
    render() {
        return (

            <div className='#Trainingconsulting' id='Trainingconsulting'>
                <h6>.</h6>
                <div id="example1">
                    <h2>   Training-Consulting Services </h2>
                </div>

                <div>
                    <Container>

                        <div className="d-flex justify-content-around">
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="/Softwaredev.png" />
                                <Card.Body>
                                    <center> <Button variant="primary">ENGINEERING SOFTWARE</Button></center>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '23rem' }}>
                                <Card.Img variant="top" src="/ITconsulting.png" />
                                <Card.Body>
                                    <center> <Button variant="primary">IT CONSULTING</Button></center>
                                </Card.Body>
                            </Card>

                        </div>
                    </Container>
                    <Container>


                        <div className="d-flex justify-content-around">
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="/Profession.jpg" />
                                <Card.Body>
                                    <center> <Button variant="primary"> PROFESSION DEVELOPEMENT</Button></center>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="/Trining.jpg" />
                                <Card.Body>
                                    <center><Button variant="primary">OFFLINE & ONLINE CLASSES AVAILABLE </Button></center>
                                </Card.Body>
                            </Card>

                        </div>

                    </Container>
                </div>

            </div>
        )
    }
}
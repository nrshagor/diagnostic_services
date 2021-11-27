import React from 'react';
import { Button, Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import man03 from '../../Images/About/man03.jpg'
import './Information.css'
const Information = () => {
    return (
        <div>
            <div className="information-title">
                <h2>How <span>We works</span> </h2>
            </div>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">

                <Card className="mx-3 information-card ">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Support</Card.Title>
                        <h3>Opening Hour</h3>
                        <p>Monday - Friday <span>9.00-18.00</span></p>
                        <p>Saturday <span>9.00-14.00</span></p>

                    </Card.Body>
                </Card>
                <Card className="mx-3 information-card  ">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Backend</Card.Title>
                        <h3>Professionals Area</h3>
                        <p>Collaboratively build backward compatible relationships</p>
                        <br />

                    </Card.Body>
                </Card>
                <Card className="mx-3 information-card ">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Service</Card.Title>
                        <h3>Patient Area</h3>
                        <p>We offer Very Good Services in medical test</p>
                        <br />

                    </Card.Body>
                </Card>

            </div>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <img src={man03} alt="" />
                    </div>
                    <div className="about-col">
                        <h1>We invest in the future</h1>

                        <p>Our goal is to provide our clients with timely, accurate, and dependable test results and support services.

                            Based in Asheville and Atlanta, we provide testing services to all 50 states and around the world. We are licensed by CLIA, the federal agency regulating laboratories, as well as by those states requiring individual licenses in addition to CLIA.</p>
                        <Button as={Link} className="btn-color" to="/about">Want know to more about us</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Information;
import React from 'react';
import { Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import pic01 from '../../Images/Sliders/pic01.jpg'
import pic02 from '../../Images/Sliders/pic02.jpg'
import pic03 from '../../Images/Sliders/pic03.jpg'

import './Home.css'
const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src={pic01}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Diagnostic Services</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src={pic02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src={pic03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
};

export default Home;
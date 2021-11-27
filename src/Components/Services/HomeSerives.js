import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicess.css'
const HomeSerives = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)));
    }, [])
    return (<>
        <div className="title-services">
            <h2> <span>Our</span> Services</h2>
        </div>

        <div className=" w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-5 my-3 g-4">


            {
                Services.map(Services => <Card className="mx-3 servicescard">
                    <Card.Img variant="top" className="img" src={Services.img} />
                    <Card.Body>
                        <Card.Title>{Services.Services_Name}</Card.Title>
                        <Button as={Link} variant="primary" to="/services">See More</Button>
                    </Card.Body>

                </Card>
                )
            }


        </div >
    </>
    );
};

export default HomeSerives;
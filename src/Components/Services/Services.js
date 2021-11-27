import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicess.css'
const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


            {
                Services.map(Services => <Card className="mx-3 servicescard ">
                    <Card.Img className="img" variant="top" src={Services.img} />
                    <Card.Body>
                        <Card.Title>{Services.Services_Name}</Card.Title>
                        <p>Services: {Services.Description}</p>

                        <Link to={`/singleservices/${Services.Services_Price}`}><button className="btn btn-warning">See More</button> </Link>

                    </Card.Body>
                </Card>)
            }


        </div >
    );
};

export default Services;
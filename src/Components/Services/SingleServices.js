import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleServices = () => {
    const { servicesId } = useParams()
    const [Services, setServices] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        const productInfo = Services.find(pro => pro?.Services_Price == servicesId);
        setDetails(productInfo)
    }, [Services])
    console.log(details);
    return (
        <div className=" mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-5 g-5">


            <Card className="mx-3 my-4 servicescard ">
                <Card.Img className="img" variant="top" src={details?.img} />
                <Card.Body>
                    <Card.Title>{details?.Services_Name}</Card.Title>
                    <h2>Prices: {servicesId} TK</h2>
                    <p>{details?.Description}</p>

                    <Link to="/services"><button className="btn btn-warning">View All</button> </Link>

                </Card.Body>
            </Card>
        </div >


    );
};

export default SingleServices;
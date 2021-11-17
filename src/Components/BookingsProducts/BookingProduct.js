import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookingProduct.css';

const BookingProduct = () => {

    const [currentService, setCurrentService] = useState([]);
    console.log(currentService)
    const { user } = useAuth();
    const { _Id } = useParams();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.order = event;
        axios.post('https://infinite-plateau-01380.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("successfull");
                }
            })
    };

    useEffect(() => {
        fetch("https://infinite-plateau-01380.herokuapp.com/services")
        .then(res=>res.json())
        .then(data => {
            setCurrentService(data);
        })
       
    }, [])
    const event = currentService.find(pd => pd._id === _Id);
    return (
        <div className="container my-5">
            <h1 className="text-center">BookingService</h1>
            <div className='row'>
                <div className="col-md-6 container">
                    <h3 className="text-center">user info</h3>
                    <div className="custom-form">
                        <form className="bg-secondary" onSubmit={handleSubmit(onSubmit)}>
                         <input value={user.displayName}  {...register("name", { required: true, maxLength: 20 })} placeholder="your name" />
                         <input type="email" value={user.email} {...register("email")} placeholder="your Email" />
                            <input type="text" {...register("address")} placeholder="your address" />
                            <input  {...register("status")} value="panding" hidden />
                            <input type="number" {...register("Phone")} placeholder="your Phone Number" />
                            <input className="btn btn-danger" type="submit" />
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">Service details</h3>

                    <Container>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={event?.imageURL}  />
                                <Card.Body>
                                    <Card.Title>{event?.name}</Card.Title>
                                    <div>
                                        <p className="fs-3 text-danger">{event?.price}</p>
                                    </div>
                                    <Card.Text>
                                        {event?.description}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>

                   

                </div>
            </div>

        </div>
    );
};

export default BookingProduct;
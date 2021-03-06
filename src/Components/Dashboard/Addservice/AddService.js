import React, { useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../../Share/Navbar/Navbar';
import './AddService.css'
const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
             price: data.price,
             type: data.type,
             description:data.description,

            imageURL: imageURL
        }



        fetch('https://infinite-plateau-01380.herokuapp.com/AddedNewService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('res data', res);
            })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '4353889ed18aa5eff15fe1a68cfad398');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="main-div">
            <div className='addService'>
                <Navbar></Navbar>

                <div className="container mt-5">
                    <h1 className='text-center adService'>Add A New <span className='py-5 text-danger text-center'>Service</span></h1>
                    <div className="row">
                        <div className="col-lg-3">
                            <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-div">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type='text' placeholder='Name' name='name'  {...register("name")} />
                                    <input type='number' placeholder='price' name='price'  {...register("price")} />
                                    <input type='text' placeholder='Type' name='type'  {...register("type")} />
                                    <input type='text' placeholder='Description' name='description'  {...register("description")} />
                                    <input type='file' placeholder='Upload Photo' onChange={handleImageUpload} />
                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <button type="submit"> Add Service </button>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    
                </div>







            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddService;
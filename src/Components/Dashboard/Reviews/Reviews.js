import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Rating from './Rating';
import './Review.css'


const Reviews = () => {
    const [imageURL,setImageURL]=useState(null);
    const [ratingStar,setRatingStar] = useState(null);
    console.log(ratingStar)
    const { register, handleSubmit, watch, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
        name:data.name,
        comment:data.comment,
        rating:ratingStar,
        imageURL:imageURL
    }
    

  
    fetch('https://infinite-plateau-01380.herokuapp.com/AddReview',{
     method:'POST',
     headers:{
      'content-type' : 'application/json'
     },
     body:JSON.stringify(eventData)
    })
    .then(res=>{
        console.log('res data',res);
    })
  };

  const handleImageUpload=event=>{
      console.log(event.target.files[0]);
      const imageData=new FormData()
      imageData.set('key','4353889ed18aa5eff15fe1a68cfad398');
      imageData.append('image',event.target.files[0])

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
  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

    return (
        <div className="main-div">
     <div className="review-banner">
         <Navbar></Navbar>
         <div className='container '>
            <h3 className='py-5 text-center text-light'>Send Your <span className='text-danger'>Review</span></h3>
        <div className="row">
            <div className="col-lg-3">
                <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
            </div>
            <div className="col-lg-6">
             <div className="form-div">
             <form onSubmit={handleSubmit(onSubmit)}>
      <input   type='text'  placeholder ='Name' name='name' {...register("name")} />
      <input   type="text" placeholder='Your Comment' name='comment' {...register("comment", { required: true })} />
      <input   type='file'  placeholder='Upload Photo' onChange={handleImageUpload}  />
    
      {errors.exampleRequired && <span>This field is required</span>}
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    emptyIcon={<FontAwesomeIcon icon= {faStar} />}
    Color="#ffd700"
  />
      <button type="submit"> Send Review </button>
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

export default Reviews;
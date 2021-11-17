import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import './AddBlog.css'
const AddBlog = () => {
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
      name: data.name,
      title: data.title,
      description: data.description,
      postDate: new Date(),
      imageURL:imageURL
    }
    

  
    fetch('https://infinite-plateau-01380.herokuapp.com/AddNews',{
     method:'POST',
     headers:{
      'content-type' : 'application/json'
     },
     body:JSON.stringify(eventData)
    })
    .then(res=>res.json())
    .then(data=>setImageURL(data))
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

    return (
        <div className="main-div">
         <div className="blog-banner">
         <Navbar></Navbar>
         <div className='container py-5'>
        
        <div className="row mt-5">
            <div className="col-lg-3">
                <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
            </div>
            <div className="col-lg-6">
             <div className="form-div">
             <form onSubmit={handleSubmit(onSubmit)}>
               <input type='text' placeholder='Name' name='name'  {...register("name")} />
               <input type='text' placeholder='title' name='title'  {...register("title")} />
               <input type='text' placeholder='Description' name='description'  {...register("description")} />
               <input   type='file'  placeholder='Upload Photo'   onChange={handleImageUpload}  />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <button type="submit"> Add New Blog Blog </button>
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

export default AddBlog;

import React, { useEffect, useState } from 'react';
import './Testomonial.css'
import Testomonial from './Testomonial';
const GetReview = () => {
    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('https://infinite-plateau-01380.herokuapp.com/review')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
        .catch(err => console.log(err))
    } ,[]);

    return (
        <div className="container">
            {review.length === 0 && <p>Loading...</p>}
            <h1 className="my-5 header">What People Say About Us</h1>
      <div className="row">
          {
              review.map(data => <Testomonial data={data}/>)
          }
      </div>
        </div>
      
    );
};

export default GetReview;
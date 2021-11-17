import React from 'react';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Rating = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div>
             <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<FontAwesomeIcon icon= {faStar} />}
    color="red"
    activeColor="#ffd700"
  />
        </div>
    );
};

export default Rating;
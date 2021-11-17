import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { useHistory } from 'react-router';
const Products = ({products}) => {
    const {_id,name,price,imageURL} = products;
    const history= useHistory();
    const handleBooking=()=>{
        history.push(`/booking/${_id}`);
      }
    return (
        <div className="col-md-3 mb-4 box-area">
        <div className="card text-center">
            <img src={imageURL} alt="" className="card-img-top" />
            <div className="card-body">
                <h5>{name}</h5>
                <p>{price}</p>
                <button onClick={handleBooking} className="btn btn-outline-secondary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default Products;
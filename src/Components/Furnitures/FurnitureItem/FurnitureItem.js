import React from 'react';
import { Link } from 'react-router-dom';
import './FurnitureItem.css';

const FurnitureItem = (props) => {
    const {_id,name,price,imageURL} = props.furniture;
    return (
        <div className="col-md-4 mb-4">
        <Link to={"services/"+_id}>
            <div className="card text-center">
                <img src={imageURL} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5>{name}</h5>
                    <h4>${price}</h4>
                </div>
            </div>
        </Link>
    </div>
    );
};

export default FurnitureItem;
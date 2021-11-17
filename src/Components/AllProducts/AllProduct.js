import React, { useEffect, useState } from 'react';
import Products from './Products';

const AllProduct = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('https://infinite-plateau-01380.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setFurnitures(data);
            // setPreloaderVisibility(false);
        })
        .catch(err => console.log(err))
    } ,[furnitures.length])
    return (
        <div className="container">
        <h1>Don't forget Book your Room</h1>
        <div className="row  my-5">
        {
            furnitures.map(p => <Products key={p._id}  products={p}/> )
        }
        
        </div>
       
       
    </div>
    );
};

export default AllProduct;
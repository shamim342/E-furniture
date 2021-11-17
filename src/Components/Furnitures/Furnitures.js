import React, { useEffect, useState } from 'react';
import FurnitureItem from './FurnitureItem/FurnitureItem';
import './Furnitures.css'
const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    console.log(furnitures)
    const [selectedFurnitureType, setSelectedFurnitureType] = useState("NewArrival");

    useEffect(() => {
        fetch('https://infinite-plateau-01380.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setFurnitures(data);
        })
        .catch(err => console.log(err))
    } ,[furnitures.length])

    const selectedFurnitures =  furnitures.filter(f => f.type == selectedFurnitureType)
    return (
        <section className="furniture-area my-5">
        <div className="container">
            <nav>
                <ul className="nav justify-content-center">
                    <li onClick={() => setSelectedFurnitureType("NewArrival")} className="nav-item">
                        <span  to="breakfast" className={selectedFurnitureType === "NewArrival" ?  "active nav-link" : "nav-link"}>New Arrival</span>
                    </li>
                    <li onClick={() => setSelectedFurnitureType("Featured")} className="nav-item">
                        <span to="breakfast" className={selectedFurnitureType === "Featured" ?  "active nav-link" : "nav-link"}>Featured</span>
                    </li>
                    <li onClick={() => setSelectedFurnitureType("OnSale")} className="nav-item">
                        <span to="breakfast" className={selectedFurnitureType === "OnSale" ?  "active nav-link" : "nav-link"}>On Sale</span>
                    </li>
                    <li onClick={() => setSelectedFurnitureType("Tending")} className="nav-item">
                        <span to="breakfast" className={selectedFurnitureType === "Tending" ?  "active nav-link" : "nav-link"}>Tending</span>
                    </li>
                </ul>
            </nav>

            <div className="row my-5">
                {
                    selectedFurnitures.map(f => <FurnitureItem key={f.id}  furniture={f} />)
                }
            </div>
        </div>
    </section>
    );
};

export default Furnitures;
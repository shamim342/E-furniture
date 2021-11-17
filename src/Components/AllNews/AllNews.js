import React, { useState } from 'react';
import { useEffect } from 'react';
import './AllNews.css';
import News from './News';
// import Preloader from '../PreLoader/PreLoader';

function AllNews() {
    const [features , setFeatures] = useState([]);
    // const [preloaderVisibility, setPreloaderVisibility] = useState("block");
    
    useEffect(() => {
            fetch('https://infinite-plateau-01380.herokuapp.com/news')
            .then(res => res.json())
            .then(data => {
                setFeatures(data);
                // setPreloaderVisibility("none");
            })
            .catch(err => console.log(err))
    } ,[features.length])
        
    

    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="text-center">
                            <h2 className="text-danger">Latest News</h2>
                            <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                            </div>
                        </div>
                    </div>
                    {/* <Preloader visibility={preloaderVisibility}/> */}

                    {
                        features.map( feature => <News key={feature.id} feature={feature}/>)
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default AllNews;
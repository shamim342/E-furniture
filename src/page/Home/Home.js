import React from 'react';
import AllNews from '../../Components/AllNews/AllNews';
import SliderTop from '../../Components/carousel/SliderTop';
import Category from '../../Components/Category/Category';
import Furnitures from '../../Components/Furnitures/Furnitures';
import GetReview from '../../Components/Testomial/GetReview';
import Footer from '../../Components/Share/Footer/Footer';
import AllProduct from '../../Components/AllProducts/AllProduct';

const Home = () => {
    return (
        <div>
            <SliderTop/>
            <Category/>
            <Furnitures/>
            <AllProduct/>
            <GetReview/>
            <AllNews/>
            <Footer/>
           
        </div>
    );
};

export default Home;
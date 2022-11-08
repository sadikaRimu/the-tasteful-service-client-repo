import React from 'react';
import Banner from '../Banner/Banner';
import FoodBlog from '../FoodBlog/FoodBlog';
import Recipes from '../Recipes/Recipes';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FoodBlog></FoodBlog>
            <Recipes></Recipes>
        </div>
    );
};

export default Home;
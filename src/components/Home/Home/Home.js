import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import FoodBlog from '../FoodBlog/FoodBlog';
import Recipes from '../Recipes/Recipes';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
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
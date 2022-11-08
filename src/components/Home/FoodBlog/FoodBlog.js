import React from 'react';
import img from '../../../assets/images/Banner/2.jpg';

const FoodBlog = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 mt-10">
            <figure><img className='h-72 rounded' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Today's Health tips</h2>
                <h3 className='cart-title font-bold'>Cut down on saturated fat and sugar</h3>
                <p>You need some fat in your diet, but it's important to pay attention to the amount and type of fat you're eating.

                    There are 2 main types of fat: saturated and unsaturated. Too much saturated fat can increase the amount of cholesterol in the blood, which increases your risk of developing heart disease.

                    On average, men should have no more than 30g of saturated fat a day. On average, women should have no more than 20g of saturated fat a day.

                    Children under the age of 11 should have less saturated fat than adults, but a low-fat diet is not suitable for children under 5.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See more</button>
                </div>
            </div>
        </div>
    );
};

export default FoodBlog;
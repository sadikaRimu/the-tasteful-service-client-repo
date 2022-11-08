import React from 'react';
import img from '../../../assets/images/Banner/3.jpg';

const Recipes = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl mt-10">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='text-2xl font-bold text-orange-600'>Coocking Section</p>
                <h2 className="card-title">Today's Special Recipe</h2>
                <h3 className='cart-title font-bold'>STUPID EASY CROCK POT</h3>
                <p>DIRECTIONS
                    Spray slow cooker with Pam.
                    Cut potatoes into wedges or whatever size pieces your family likes. You can leave the skins off or on (we like them on)throw them in the pot.
                    Cut sausage into 1/4" slices and throw them into the pot.
                    In a bowl blend softened cream chees, cream of celery soup and envelope of dry ranch dressing mix. Pour over Potatoes and sausage.
                    give it a little stir
                    Cook low 6-8 hours.</p>

                <div className="card-actions">
                    <button className="btn btn-primary">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
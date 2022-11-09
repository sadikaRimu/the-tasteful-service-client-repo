import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewFood = ({ showReview, reviewElement }) => {



    return (
        <div>

            <h3>{showReview.map(e => <p>{e}</p>)}</h3>
        </div>
    );
};

export default ReviewFood;
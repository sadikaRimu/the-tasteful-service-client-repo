import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Reviews');
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                //authorization: `Bearer ${localStorage.getItem('food-token')}`
                authorization: `Bearer ${localStorage.getItem('food-token')}`

            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);

            })
    }, [user?.email, logout])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('genius token')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const approving = reviews.find(review => review._id === id);
                    approving.status = 'Approved';
                    const newReviews = [...remaining, approving];
                    setReviews(newReviews);
                }
            })
    }
    // const handleInputChange = (event) => {
    //     const field = event.target.name
    //     const value = event.target.value;
    //     const newReview = { ...user }
    //     newReview[field] = value;
    //     setUpdateReview(newReview);

    // }


    return (
        <div>
            <h2 className='text-5xl mb-3'>you have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>Customer info</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}

                            ></ReviewRow>)

                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Reviews;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewFood from '../../ReviewFood/ReviewFood';

const ServiceDetails = () => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [showReview, setShowReview] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    useTitle('Service Details');
    useEffect(() => {
        fetch('https://sadika-assignment11-server.vercel.app/reviewsall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let msg = [];
                let reviewInfo = [];
                data.map(element => {

                    if (element.service === _id) {
                        msg.push(element.message);
                        reviewInfo.push(element);
                    }
                    setShowReview(msg);
                    setReviewData(reviewInfo);
                    return msg;
                })


                console.log(reviewData);
            })
    }, []);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'not given';
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const Review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,

        };
        // if (phone.length > 11) {
        //     alert('phone charecter should be 11 charecter or longer');
        // }
        // else{

        // }
        fetch('https://sadika-assignment11-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(Review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}$</p>
                <div className="card-actions justify-end">

                    <label htmlFor="my-modal-5" className="btn">Add Review</label>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    {
                        user?.email ?
                            <>
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg mb-5">You are about to Review: {title}</h3>
                                        <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <form onSubmit={handleReview}>
                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                                <input className='h-20 w-20' name='photoURL' type='image' src={user?.photoURL} alt='' readOnly />
                                                <input name='displayName' type="text" placeholder="customer Name" defaultValue={user?.displayName} className="input input-ghost w-full input-bordered" readOnly />
                                                <input name='phone' type="text" placeholder="Your phone" className="input input-ghost w-full input-bordered " required />
                                                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                                            </div>
                                            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>
                                            <div className="modal-action">
                                                <input type='submit' htmlFor="my-modal-5" value='Place Review' className="btn" />
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg mb-5">You Have to login?sign up first to add review</h3>
                                        <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                        </div>

                                        <div className="modal-action">

                                            <button className='btn'><Link to='/login'>Login</Link></button>
                                            <button className='btn'><Link to='/signup'>Sign Up</Link></button>
                                        </div>


                                    </div>
                                </div>
                            </>
                    }

                </div>
            </div>
            {
                reviewData ? <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <h2 className='text-center font-bold my-5'>All Reviews About this food</h2>
                            <tbody>
                                {
                                    reviewData.map(element => <><h2 className='font-bold text-center'>{element.message}</h2>
                                        <h2 className='text-center'>{element.email}</h2>
                                        <h2 className='text-center'>{element.phone}</h2>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
                    :
                    'No review yet'
            }
        </div>
    );
};

export default ServiceDetails;
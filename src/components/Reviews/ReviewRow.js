import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate, handleUpdateReview }) => {
    const { _id, serviceName, customer, price, email, phone, service, status, message } = review;
    const { user } = useContext(AuthContext);
    const [reviewService, setReviewService] = useState({});
    const [updateReview, setUpdateReview] = useState(review);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])
    const handleInputChange = (event) => {
        const field = event.target.name
        const value = event.target.value;
        const newReview = { ...user }
        newReview[field] = value;
        setUpdateReview(newReview);

    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost text-xl font-bold'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>
                <div>
                    <div>
                        <img className='h-20 w-20 rounded' src={user?.photoURL} alt='' />
                        {email}
                    </div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                </div>
            </td>
            <td>
                <div>
                    {message}
                </div>
            </td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending..'}</button>

                <div className="card-actions justify-end">

                    <label htmlFor="my-modal-5" className="btn">Edit</label>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg mb-5">Edit Your Reviews: </h3>
                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={() => handleUpdateReview(_id, message, phone)}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                    <input name='id' type='text' defaultValue={review._id} hidden />
                                    <input className='h-20 w-20' name='photoURL' type='image' src={user?.photoURL} alt='' readOnly />
                                    <input name='displayName' type="text" placeholder="customer Name" defaultValue={user?.displayName} className="input input-ghost w-full input-bordered" readOnly />
                                    <input onChange={handleInputChange} name='phone' type="text" defaultValue={phone} placeholder="Your phone" className="input input-ghost w-full input-bordered " required />
                                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                                </div>
                                <textarea onChange={handleInputChange} name='message' className="textarea textarea-bordered h-24 w-full" defaultValue={message} placeholder="Your Review" required></textarea>
                                <div className="modal-action">
                                    <input type='submit' htmlFor="my-modal-5" value='Edit Review' className="btn" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </th>
        </tr>
    );
};

export default ReviewRow;
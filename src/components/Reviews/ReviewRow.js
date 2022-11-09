import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, customer, price, email, phone, service, status, message } = review;
    const { user } = useContext(AuthContext);
    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

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
            </th>
        </tr>
    );
};

export default ReviewRow;
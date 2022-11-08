import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ReviewFood = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service_id: _id,
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
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('order placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <h2 className="text-4xl">You are about to review: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered " />
                    <input name='phone' type="text" placeholder="Your phone" className="input input-ghost w-full input-bordered " required />
                    <input name='message' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default ReviewFood;
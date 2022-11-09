import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services');
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title,
            price,
            img,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('genius token')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('services added successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl mb-2 text-center">Add New Service </h2>
                <div className='grid grid-cols-1 gap-4 mb-4'>
                    <input name='title' type="text" placeholder="Enter Food Items name" className="input input-ghost w-full input-bordered" />
                    <input name='price' type="text" placeholder="Enter food Price" className="input input-ghost w-full input-bordered " />
                    <input name='img' type="text" placeholder="Enter food image URL" className="input input-ghost w-full input-bordered " required />

                </div>
                <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Enter Food Description" required></textarea>
                <input className='btn' type="submit" value="Add Services" />
            </form>
        </div>
    );
};

export default AddServices;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCarAll from './ServiceCarAll';

const ServicesAll = () => {
    const serviceAll = useLoaderData();
    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold">Food Menu</h2>
                <p> There are many variations of Food items available, you can order your meal from here. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceAll.map(service => <ServiceCarAll
                        key={service._id}
                        service={service}
                    ></ServiceCarAll>)
                }
            </div>

        </div>
    );
};

export default ServicesAll;
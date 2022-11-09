import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='text-center font-bold'>
            <h2 className='mb-6 font-extrabold'>Blog Section</h2>
            <div className='border-2 border-blue-900 p-5 mb-6 rounded'>
                <h1 className='mb-5'>Question 1: What is the difference between SQL and NoSQL?</h1>
                <p>Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='border-2 border-blue-900 p-5 mb-6 rounded'>
                <h1 className='mb-5'>Question 2: What is JWT? How does it work?</h1>
                <p>Answer: What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
            </div>
            <div className='border-2 border-blue-900 p-5 mb-6 rounded'>
                <h1 className='mb-5'>Question 3: What is the difference between javascript and node js?</h1>
                <p>Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='border-2 border-blue-900 p-5 mb-6 rounded'>
                <h1 className='mb-5'>Question 4: How does node js handle multiple request at the same time?</h1>
                <p>Answer: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;
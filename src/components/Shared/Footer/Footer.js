import React from 'react';
import logo from '../../../assets/images/Logo/foodlogo.jpg';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-nutral-200 text-blue">
            <div>
                <img className='h-20 w-25 rounded' src={logo} alt="" />
                <p>The Tasteful Service<br />Providing by Sadika Afrin since 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Lunch</a>
                <a href='/' className="link link-hover">Breakfast</a>
                <a href='/' className="link link-hover">Dinner</a>
                <a href='/' className="link link-hover">Snacks</a>
            </div>
            <div>
                <span className="footer-title">Owner</span>
                <a href='/' className="link link-hover">About me</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Logo/foodlogo.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <img className='h-20 w-25 rounded' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-xl">The Tasteful Service</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            {
                user?.email ?
                    <>
                        <li className='font-semibold'><Link to='/orders'>My Reviews</Link></li>
                        <li className='font-semibold navbar-end'>
                            <button onClick={handleLogout} className='btn'>Sign Out</button>
                        </li>
                    </>
                    :
                    <>
                        <div className='navbar-end'>
                            <li><Link to='/login' className="btn">Login</Link></li>
                            <li><Link to='/signup' className="btn">Sign Up</Link></li>
                        </div>
                    </>
            }
        </div>
    );
};

export default Header;
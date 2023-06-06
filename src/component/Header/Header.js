import React from 'react';
import logo from '../../Assets/logo2.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-white'>
            <nav className='container mx-auto py-4 sticky'>
                <div className="menu flex text-center justify-between items-center" >
                    <div className="menu-img">
                        <NavLink to='/home'><img src={logo} alt="" className='h-12' /></NavLink>
                    </div>
                    <div className="menu-contnt space-x-4  ">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/shop'>Shop</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
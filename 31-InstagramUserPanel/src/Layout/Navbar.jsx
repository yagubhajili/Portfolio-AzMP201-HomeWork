import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCompass, FiEdit, FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to="/" className="text-white flex items-center space-x-2">
                        <FiHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/discover" className="text-white flex items-center space-x-2">
                        <FiCompass />
                        <span>Discover</span>
                    </Link>
                    <Link to="/post" className="text-white flex items-center space-x-2">
                        <FiEdit />
                        <span>Post</span>
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/login" className="text-white flex items-center space-x-2">
                        <FiLogIn />
                        <span>Login</span>
                    </Link>
                    <Link to="/register" className="text-white flex items-center space-x-2">
                        <FiUserPlus />
                        <span>Register</span>
                    </Link>
                    <Link to="/profile" className="text-white flex items-center space-x-2">
                        <FiUser />
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { FaSearch, FaSadTear } from 'react-icons/fa'; // Import icons from react-icons library
import Logo from '../../../assets/logo.png'
import './header.scss'
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button><FaSearch /></button>
            </div>
            <div className="icons">
                <FaSadTear />
                <FaSadTear />
                <FaSadTear />
                <FaSadTear />
                <FaSadTear />
            </div>
        </header>
    );
}

export default Header;

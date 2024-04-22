import React from 'react';
import { FaSearch, FaSadTear } from 'react-icons/fa'; // Import icons from react-icons library
import Logo from '../../../assets/logo.png'
import Searchbar from '../../searchbar/searchbar';
import './header.scss'
function Header() {
    return (
        <header className="header">
            <div className='logodiv'>
                <div className="logo">
                    <img src="../src/assets/logo.png" alt="Logo" />
                </div>
                <div><Searchbar /></div>
                    
            </div>
            
    
            <div className="icons">
               <img src='./head_sun.png' className='head_icons'/>
               <img src='./head_chat.png'  className='head_icons' />
               <img src='./head_notification.png'  className='head_icons'/>
               <img src='./head_setting.png'  className='head_icons' />
               <img src='./head_user.png'  className='head_icons' />
            </div>
        </header>
    );
}

export default Header;

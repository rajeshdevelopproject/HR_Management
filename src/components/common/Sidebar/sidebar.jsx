// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import App from '../../../assets/sidebar-icons/App.png'
import Edit from '../../../assets/sidebar-icons/Edit.png'
import Hands from '../../../assets/sidebar-icons/Hands.png'
import Helpdesk from '../../../assets/sidebar-icons/Helpdesk.png'
import Link from '../../../assets/sidebar-icons/Link.png'
import List from '../../../assets/sidebar-icons/List.png'
import Profilee from '../../../assets/sidebar-icons/Profilee.png'
import Search from '../../../assets/sidebar-icons/Search.png'
import Jobb from '../../../assets/sidebar-icons/Jobb.png'

import './sidebar.scss'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <SidebarItem icon={App} link="#home" />
        <SidebarItem icon={Edit} link="#profile" />
        <SidebarItem icon={Profilee}link="#settings" />
        <SidebarItem icon={Search}/>
        <SidebarItem icon={Jobb}/>
        <SidebarItem icon={List}/>
        <SidebarItem icon={Hands}/>
        <SidebarItem icon={Helpdesk} />
        <SidebarItem icon={Link} />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, text, link }) => {
  return (
    <li>
      <a href={link} className="sidebar-link">
        <img src={icon} /> {text}
      </a>
    </li>
  );
};

export default Sidebar;

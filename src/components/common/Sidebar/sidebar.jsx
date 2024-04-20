// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <SidebarItem icon={faHome} link="#home" />
        <SidebarItem icon={faUser} link="#profile" />
        <SidebarItem icon={faCog}link="#settings" />
        <SidebarItem icon={faSignOutAlt} link="#logout" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, text, link }) => {
  return (
    <li>
      <a href={link} className="sidebar-link">
        <FontAwesomeIcon icon={icon} /> {text}
      </a>
    </li>
  );
};

export default Sidebar;

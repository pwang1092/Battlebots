import React from 'react';
import './Navbar.css'; 
import logo from '../Images/logo.png'; 
import contact from '../Images/contact.png'; 
import {Link} from 'react-scroll'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt = "logo" className='logo'></img>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">People</Link>
                <Link className="desktopMenuListItem">Gallery</Link>
            </div>
            <button className = "desktopMenuBtn">
                <img src={contact} alt="contact" className="desktopMenuImg"/>Contact Us
            </button>
        </nav>
    )
}

export default Navbar
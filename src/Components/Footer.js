import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import "./Footer.css";
import youtube from "../Images/youtube.png"
import insta from "../Images/instagram.png";
import github from "../Images/github2.png"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className='email'>Email: dqle@usc.edu </div>
            <div className='images'>
                <a href="https://www.instagram.com/usc.arc/" target='_blank' rel='noreferrer'>
                    <img src={insta} alt = "instagram" className='socials'></img>
                </a>
                <a href="https://github.com/pwang1092/Battlebots" target='_blank' rel='noreferrer'>
                    <img src={github} alt = "github" className='socials'></img>
                </a>
                {/*<a href="" target='_blank' rel='noreferrer'>
                    <img src={youtube} alt = "instagram" className='socials'></img>
                </a>*/}
            </div>
        </footer>
    ); 
}

export default Footer; 
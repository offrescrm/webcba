import React from 'react';
import logo from '../assets/logo.png';
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "../styles/header.scss";
import { NavLink } from 'react-router-dom';
import Accueil from "../pages/Accueil";
import fleche from "../assets/icon.png"

const Header = () => {
    return (
        <div className='header'> 
            <NavLink exact to="/">
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
            
            <div className='network'> 
                {/*
                <a href='https://www.facebook.com' target='_blank'><img src={facebook} /></a>
                <a href='https://www.twitter.com' target='_blank'><img src={twitter} /></a>
                <a href='https://www.instagram.com' target='_blank'><img src={instagram} /></a>
                */}
                <a href='https://www.sncf.com/fr/' target='_blank' className="imgs"> <img src={fleche} className="imgs"/> sncf</a>
                <a href='https://www.sncf-connect.com/' target='_blank' className="imgs"> <img src={fleche} className="imgs"/>sncf-connect</a>
            </div>
            
        </div>
    );
};

export default Header;
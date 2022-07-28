import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='trait'></div>
            <div>
                <NavLink exact to="/RGPD" className="rgpd">
                <h4>Mentions légales</h4>
                </NavLink>
            </div>
            <div>
                <p>Copyright © 2022 Tous droits réservés</p>
            </div>
        </div>
    );
};

export default Footer;
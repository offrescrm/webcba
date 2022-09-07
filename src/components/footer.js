import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            {/*<div className='trait'></div>*/}
            
                <NavLink exact to="/RGPD" className="rgpd">
                <h4 className='h4'>Mentions légales</h4>
                </NavLink>
        

            <div>
                <p>Copyright © 2022 Tous droits réservés</p>
            </div>
        </div>
    );
};

export default Footer;
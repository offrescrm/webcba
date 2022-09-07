import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/Notfound.scss";
import fond from "../assets/Na_Nov_26.jpg";
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notfound'>
            <Header/>

            <div className='error'>
                <img src={fond} className="fond" alt="logo"/><br/>
                <h1 style={{'color': '#7C6AAE', 'margin-bottom':'50px'}}>La page demandée n'existe pas !</h1>
            </div>

            <div className='footeer'>
                {/*<div className='trait'></div>*/}
                
                    <NavLink exact to="/RGPD" className="rgpd">
                    <h4>Mentions légales</h4>
                    </NavLink>
                
                <div>
                    <p>Copyright © 2022 Tous droits réservés</p>
                </div>
            </div>
            
        </div>
       
    );
};

export default Notfound; 
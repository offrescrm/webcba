import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/Notfound.scss";
import fond from "../assets/Na_Nov_26.jpg";
//import fond from "../assets/2663517.jpg";
<img src={fond} className="fond" alt="logo"/>
const Notfound = () => {
    return (
        <>
            <Header/>
            <div className='error'>
                <img src={fond} className="fond" alt="logo"/>
            </div>
            <Footer/>
        </>
       
    );
};

export default Notfound; 
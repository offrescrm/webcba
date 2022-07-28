import React from 'react';
import Header from '../components/header';
//import Footer from '../components/footer';
import "../styles/Accueil.scss";
import tel from "../assets/tel.png";
import image from "../assets/image.jpg";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Accueil = () => {
    
    const [dbDatas,setDbDatas]=useState(
        {
            nom:"",
            prenom:"",
            numero:"",
            commentaires:"",
            date:"",
            heure:""
        }
    );
    
    const handleChange=(e)=>{                   //cette fonction se charge de mettre les données tapées dans les champs du formulaire dans le state pour pouvoir les avoir à notre disposition et les mettre dans la bd grâce à axios.post()
        setDbDatas({
            ...dbDatas,                         //mettre toutes les clés de dbDatas (ex: auteur, genre, ...) aux valeurs dans e.target.value
            [e.target.name] : e.target.value,   // on associe le champ name et le champ valeur ex: name:valeur => genre:"religion"
        });
        console.log(dbDatas);
    }
 
    var getDispo='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webcallback.callback.csi.avaya.com/"><soapenv:Header><wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken><wsse:Username>IS</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">Sncf@2021!</wsse:Password></wsse:UsernameToken></wsse:Security></soapenv:Header><soapenv:Body><web:getNextAvailableTimeSlots><web:configurationId>1</web:configurationId><web:from>2022-07-21T11:13:00</web:from><web:timeZone>+2.0</web:timeZone>Avaya Callback Assist Web Services API guide 24</web:getNextAvailableTimeSlots></soapenv:Body>';
    //useEffect(()=>
            axios.post('https://khadija-test.herokuapp.com/http://10.106.32.53:8081/webcallback/WebCallback41?wsdl=WebCallbackWs41.wsdl',
            getDispo,
            {headers:
                {'Content-Type': 'text/xml'}
            }).then(res=>{
                console.log(res);
            }).catch(err=>{console.log(err)})
    //)
   
 /*
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open('POST','http://10.106.32.53:8081/webcallback/WebCallback41?wsdl=WebCallbackWs41.wsdl',true);
    var soapRequest='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webcallback.callback.csi.avaya.com/">'+'<soapenv:Header><wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">'+'<wsse:UsernameToken>'
 */

    return (
        <>
                <div className='cercle1'></div>
                <div className='cercle2'></div>
                <div className='cercle3'></div>
                <div className='cercle4'></div>
        <div className='bodyy' style={{height: '100vh'}}>       
            <Header className="header"/>
            
            <div className='page'>

                <div className='gauche'>
                        <h1>WEB CALLBACK</h1>
                        <p className='p'>Réservez votre créneau </p>
                        <div className='pp'>pour être rappelé <img src={tel} className="tel"/> </div>
                        <img src={image} className='image'/>
                </div>

                <div className='droite'>

                    <form className='form'>
                        <h2>Informations personnelles</h2>
                        <input className="nomprenom" onChange={handleChange} type="text" name="prenom" placeholder='Prénom' required/> <br/><br/>
                        
                        <input className="nomprenom" onChange={handleChange} type="text" name="nom" placeholder='Nom'  required/><br/><br/>

                        <input className="nomprenom" onChange={handleChange} type="number" name="numero" placeholder='Numéro de téléphone' required/><br/><br/>

                        <h2>Informations pour le rappel</h2>
                        <textarea onChange={handleChange} name="commentaires" className="form__field" placeholder='Commentaires'></textarea><br/><br/>

                        <label for="date">Choisissez une date    </label>
                        <input onChange={handleChange} className='time' type="date" id="date" name="date" min="2022-07-18" ></input> <br/><br/>

                        <label for="heure">Choisissez une horaire  </label>
                        <input onChange={handleChange} className='time' type="time" id="heure" name="heure" min="09:00" max="18:00" required></input><br/><br/><br/>
                        
                        <input onChange={handleChange} className="btn-grad" type="submit" value="Appelez-moi"/><br/>            
                    </form>

                </div>
            </div>
            <br/><br/>
            {/* Footer */}
            <div className='footeer'>
                {/*<div className='trait'></div>*/}
                <div>
                    <NavLink exact to="/RGPD" className="rgpd">
                    <h4>Mentions légales</h4>
                    </NavLink>
                </div>
                <div>
                    <p>Copyright © 2022 Tous droits réservés</p>
                </div>
            </div>
             {/* Fin Footer */}

        </div> 
        </>
    );
};

export default Accueil;

//rsc pour créer le component
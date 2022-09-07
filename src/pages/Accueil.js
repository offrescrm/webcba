import React from 'react';
import Header from '../components/header';
//import Footer from '../components/footer';
import "../styles/Accueil.scss";
import tel from "../assets/tel.png";
import image from "../assets/image.jpg";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import MuiAlert from "@material-ui/lab/Alert";
import emailjs from 'emailjs-com';
import validator from 'validator';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Accueil = () => {

    const today= new Date();
    var jj=today.getDate();
    var mm=today.getMonth()+1;
    var aaaa=today.getFullYear();
    var hora="";
    var day="";

    const [dbDatas,setDbDatas]=useState(
        {
            nom:"",
            prenom:"",
            numero:"",
            commentaires:"",
            date:day,
            heure:""
        }
    );
    
    var z=new Date(dbDatas.date); 

    //today.getHours()>=9 && today.getHours()<=18 && !(today.getHours()<9 || today.getHours()>18 || today.getTime()<z.getTime())

    if( today.getHours()>=9 && today.getHours()<=18 && today.getDate()==z.getDate() && today.getMonth()==z.getMonth() ){ 
        //console.log('ok',today.getHours()+':'+today.getMinutes());
        hora=today.getHours()+':'+today.getMinutes();
    }else{
        hora="09:00";
    }

    if(jj<10){
        jj="0"+jj;
    }
    if(mm<10){
        mm="0"+mm;
    }
    day=aaaa+"-"+mm+"-"+jj;

    const handleChange=(e)=>{                   //cette fonction se charge de mettre les données tapées dans les champs du formulaire dans le state pour pouvoir les avoir à notre disposition et les mettre dans la bd grâce à axios.post()
        setDbDatas({
            ...dbDatas,                         //mettre toutes les clés de dbDatas (ex: auteur, genre, ...) aux valeurs dans e.target.value
            [e.target.name] : e.target.value,   // on associe le champ name et le champ valeur ex: name:valeur => prenom:"Khadija"
        });
        console.log(dbDatas);
    }

    var getDispo='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webcallback.callback.csi.avaya.com/"><soapenv:Header><wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken><wsse:Username>sncf</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">LnRlVkCnxGC0cKs3</wsse:Password></wsse:UsernameToken></wsse:Security></soapenv:Header><soapenv:Body><web:getAvailability><web:configurationId>86</web:configurationId><web:timeZone>+2.0</web:timeZone></web:getAvailability></soapenv:Body></soapenv:Envelope>';

    var requete='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webcallback.callback.csi.avaya.com/"><soapenv:Header><wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken><wsse:Username>sncf</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">LnRlVkCnxGC0cKs3</wsse:Password></wsse:UsernameToken></wsse:Security></soapenv:Header><soapenv:Body><web:createScheduledWebCallbackRequest><web:configurationId>86</web:configurationId><web:phoneNumber>'+dbDatas.numero+'</web:phoneNumber><web:timeZone>+2</web:timeZone><web:from>'+dbDatas.date+'T'+dbDatas.heure+':00+02:00</web:from><web:answers><mod:TextAnswer xmlns:mod="http://model.webcallback.callback.csi.avaya.com"><mod:answerText>PhoneNumber</mod:answerText><mod:questionId>231</mod:questionId></mod:TextAnswer><mod:TextAnswer xmlns:mod="http://model.webcallback.callback.csi.avaya.com"><mod:answerText>CustomerName</mod:answerText><mod:questionId>230</mod:questionId></mod:TextAnswer><mod:TextAnswer xmlns:mod="http://model.webcallback.callback.csi.avaya.com"><mod:answerText>CustomerFamilyName</mod:answerText><mod:questionId>232</mod:questionId></mod:TextAnswer><mod:TextAnswer xmlns:mod="http://model.webcallback.callback.csi.avaya.com"><mod:answerText>Comments</mod:answerText><mod:questionId>233</mod:questionId></mod:TextAnswer></web:answers><web:siteId>2</web:siteId></web:createScheduledWebCallbackRequest></soapenv:Body></soapenv:Envelope>';

    
    const handleSubmit=(e)=>{
        
            axios.post('http://10.106.32.53:8081/webcallback/WebCallback418?wsdl=WebCallbackWs418.wsdl',
            requete,
            {headers:
                {'Content-Type': 'text/xml'}
            }).then(res=>{
                console.log(res.data);
            }).catch(err=>{
                console.log(err.message)
            });
            
            e.preventDefault();
            emailjs.sendForm('service_rp9d68g','template_pzabtfp',e.target, 'rzyy5LUFy2ka_vB7E').then(res=>{alert('Demande de rappel prise en compte avec succès')}).catch(err=>{alert("Entrez une adresse email valide svp !");console.log(err);});
            
    }

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email) && !email) {
        setEmailError('')
        }else {
        setEmailError('Entrer un email valide !')
        }
  }

    return (
        <>
                <div className='cercle1'></div>
                <div className='cercle2'></div>
                <div className='cercle3'></div>
                <div className='cercle4'></div>
        
        <div className='bodyy' style={{height: '100vh','marginTop':"25px"}}>       
            <Header className="header"/>
            
            <div className='page'>

                <div className='gauche'>
                        <h1>WEB CALLBACK</h1>
                        <p className='p'>Réservez votre créneau </p>
                        <div className='pp'>pour être rappelé(e) <img src={tel} className="tel"/> </div>
                        <img src={image} className='image'/>
                </div>

                <div className='droite'>

                    <form className='form' onSubmit={handleSubmit}>
                        <h2 style={{'marginTop':'10px'}}>Informations personnelles</h2>
                        <input className="nomprenom" onChange={handleChange} type="text" name="prenom" placeholder='Prénom' required/> <br/><br/>
                        
                        <input className="nomprenom" onChange={handleChange} type="text" name="nom" placeholder='Nom'  required/><br/><br/>

                        <input className="nomprenom" onChange={handleChange} type="tel" name="numero" placeholder='Numéro de téléphone' required/><br/><br/>
                        <input className="nomprenom"  type="email" name="email" placeholder='Email'  required/>
                        <br/><span style={{fontWeight: 'bold',color: '#7c6aaeae',marginTop:'25px'}}>{emailError}</span>
                        <br/><br/>
                        <h2>Informations pour le rappel</h2>
                        <textarea onChange={handleChange} name="commentaires" className="form__field" placeholder='Motif(s)'></textarea><br/><br/>

                        <label htmlFor="date">Choisissez une date    </label>
                        <input onChange={handleChange} className='time' type="date" id="date" step="-5" name="date" min={day} required></input> <br/><br/>

                        <label htmlFor="heure">Choisissez un créneau horaire  </label>
                        <input onChange={handleChange} className='time' type="time" id="heure" name="heure" min={hora} max="18:00" required></input><br/><br/><br/>
                        
                        <input className="btn-grad" type="submit" value="Appelez-moi"/><br/>            
                    </form>

                </div>
            </div>
            <br/><br/>
            {/* Footer */}
            <div className='footeer'>
                {/*<div className='trait'></div>*/}
                
                    <NavLink exact to="/RGPD" className="rgpd">
                    <h4>Mentions légales</h4>
                    </NavLink>
                
                <div>
                    <p>Copyright © 2022 Tous droits réservés</p>
                </div>
            </div>
             {/* Fin Footer ""onChange={(e) => validateEmail(e)}""*/}

        </div> 
        </>
    );
};

export default Accueil;

//rsc pour créer le component
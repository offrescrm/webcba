import React from 'react';
import Header from '../components/header';
import "../styles/rgpd.scss";
import { NavLink } from 'react-router-dom';

const RGPD = () => {
    return (
        <div>
            <Header />
                <div className='rgpd'>
                    <h2 className='h2'>Mentions légales</h2>
                    <p>Vous êtes actuellement connecté au site internet sncf-webcba.com<br/>

                    <h3>Éditeur du Site</h3>
                    Le Site est édité par Société nationale SNCF, société anonyme au capital social de 1.000.000.000 €, immatriculée au Registre du Commerce et des Sociétés de Bobigny sous le numéro 552 049 447 et sous le numéro de SIRET 552 049 447 76279.

                    Adresse du siège social : SNCF Campus étoiles, 2, Place aux Étoiles, 93200 Saint-Denis

                    Email : mentions-legales-sncf.com@sncf.fr<br/>

                    <h3>Directeur de publication</h3>
                    Le directeur de publication est Jean-Pierre FARANDOU, Président-directeur général de Société nationale SNCF.<br/>

                    <h3>Hébergement et maintenance du Site</h3>
                   </p><br/>

                    <h2 className='h2'>Conditions générales d'utilisation</h2>
                    <h3>Préambule</h3>
                    <p>
                    Il est fortement recommandé de lire attentivement l'intégralité des présentes Conditions Générales d'Utilisation avant de consulter le site www.sncf.com (ci-après, le « Site »).

                    Les présentes Conditions Générales d’Utilisation (ci-après les « CGU ») ont pour objet de déterminer les conditions d’accès et les règles d’utilisation dans lesquelles le Site offre l’accès à un service de rappel programmé en ligne accessible par le lien suivant : www.sncf-webcba.com.<br/>

                    L’accès au Site est subordonné au respect des CGU. L’accès au Site est strictement réservé à l’utilisateur (ci-après, « l’Utilisateur ») tel que défini dans les CGU.<br/>

                    SNCF se réserve le droit de modifier ou de mettre à jour à tout moment, unilatéralement, les CGU au gré des changements ou additions effectués, afin notamment de se conformer à toutes évolutions légales, jurisprudentielles, éditoriales et/ou techniques ainsi qu’aux éventuelles modifications des conditions générales d’utilisation des services de l’Hébergeur.<br/>

                    L'Utilisateur doit consulter régulièrement la dernière version des CGU disponible en permanence sur le Site.
                    </p>
                    <h3>Définitions</h3>
                    <p>
                        Au sein des CGU, les mots ou expressions commençant avec une majuscule auront la signification suivante :<br/>

                        Éditeur : désigne SNCF.<br/>

                        Hébergeur : désigne e-SNCF Solutions.<br/>

                        Site : désigne le site proposé par l’Éditeur sur Internet depuis l’adresse www.sncf-webcba.com.<br/>

                        Utilisateur(s) : désigne(nt) toute personne ayant accès au Site quel que soit le lieu où elle se trouve et les modalités de connexion.
                    </p>
                    <h3>Objet du site</h3>
                    <p>
                        Le Site a pour objet de mettre à la disposition des Utilisateurs la possibilité de se programmer un créneau de rappel en fonction de la disponibilité des agents du service, dans le but d'éviter une longue attente au téléphone. 
                        Toute utilisation du Site se fera dans le respect des CGU.
                    </p>
                    <h3>Disponibilité du site</h3>
                    <p>Le Site est accessible 24 heures sur 24, 7 jours sur 7, sauf cas de force majeure ou d’événement hors du contrôle de SNCF.

SNCF se réserve le droit de suspendre, d'interrompre ou de limiter, sans avis préalable, l'accès à tout ou partie du Site, notamment pour des opérations de maintenance et de mises à jour nécessaires au bon fonctionnement du Site et des matériels afférents, ou pour toute autre raison, notamment technique.

SNCF n’est tenue à aucune obligation de résultat concernant la disponibilité du Site et l’accessibilité technique au Site. SNCF n’est en aucun cas responsable des interruptions et des conséquences qui peuvent en découler pour l'Utilisateur notamment lorsque les interruptions proviennent de celles de l’Hébergeur pour ses besoins de maintenance ou autres.

L’Utilisateur est informé que SNCF peut mettre fin ou modifier les caractéristiques du Site, à tout moment, sans préavis et sans que l’Utilisateur dispose d’un recours à l’encontre de SNCF.<br/><br/><br/>
                    </p>
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

export default RGPD;
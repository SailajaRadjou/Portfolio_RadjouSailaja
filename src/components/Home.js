import React, {Fragment} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import "../styles/home/home_overrides.css";
import Project from './Projets';
import Contact from './Contact';
import Competences from './Competences';
import Parcours from './Parcours';
import pic_img from "../images/IMGP0247.JPG"; 
import pdf_img from "../images/PDF_file.png";
import pdf_file from "../downloads/CV_Radjou_Sailaja_Developpeur_Web.pdf";
function Home() {
    return (
        <Fragment>
            <div className="container" id="home">
                    <div className="row">
                        <div className="col-sm-4 display_profile_photo">
                            <div className="rounded-circle">
                                <img src={pic_img} className="rounded-circle mx-auto d-block profile_img" alt="My_Profile_Picture" />
                            </div>
                            <br />
                        </div>
                        <div className="col-sm-8 presentation_display">
                            <h2 className="sub_title">Présentations</h2>
                            <br />
                            <p className="text-justify">Toujours passionné par l'informatique, j'ai commencé mes études par une licence. Ensuite j'ai approfondie mes connaissances par un master en Informatique appliqué.
                                En Mars 2021 j'ai repris ma vie professionnel par une formation continue de développeur web(7 mois) dispensé par Openclassroom.
                                Ainsi j'ai perfectionné mes compétences à travers des projets dans ce domaine.
                                Maintenant je suis à la recherche d'une entreprise pour débuter mon métier.
                            </p>
                        </div>
                    </div>  
                    
                    <Parcours />
                    <Competences />
                    <Project /><br /><br />
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="rounded-circle">
                                <p>Vous pouvez également télécharger mon CV dans un format plus classique. Pour cela cliquez sur l'icône ci-dessous.</p>
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Cliquez ici pour télécharger mon CV</strong>.
                                                </Tooltip>
                                            }
                                            >
                                           <a href={pdf_file} target="_blank" rel="noopener noreferrer"> 
                                            <img src={pdf_img} className="square mx-auto d-block pdf_img_display" alt="My_Profile_Picture" />
                                            </a> 
                                        </OverlayTrigger>
                                 
                                    </>
                                
                            </div>
                            <br />
                        </div>
                    </div>
                    <Contact />
            </div>
        </Fragment>
    )
}
export default Home;
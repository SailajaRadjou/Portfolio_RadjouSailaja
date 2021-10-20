import React, {Fragment} from 'react'
import {CardGroup, Card} from 'react-bootstrap';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import "../styles/projets/projets_overrides.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Projet3 from "../images/projet3.png";
import Projet4 from "../images/projet4.png";
import Projet5 from "../images/projet_orino.png";
import Projet6 from "../images/projet6.jpg";
import Projet7 from "../images/projet7.png";
function Projets() {
    return (
        <Fragment>
            <div className="container" id="projects">
                <div className="col-sm-12">
                    <h2 className="sub_title">Mes Réalisations</h2><br />
                    <CardGroup className="projet_card_group">
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet3} className="img-fluid image_display card_display_border" />
                            <Card.Body className="card_display_border">
                            <Card.Title><h3><strong>Ohmyfood</strong></h3></Card.Title>
                            <Card.Text>
                                Frontend (HTML5 et CSS3 avec SASS) d'un site de commande auprès de restaurants gastronomiques, avec animations CSS.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card_display_border">
                            <strong className="projet_display_footer">
                                Projet3 - OpenClassrooms 2021
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Lien vers le site</strong>.
                                                </Tooltip>
                                            }
                                            >
                                            <a href="https://sailajaradjou.github.io/SailajaRadjou_3_260521/" target="_blank" rel="noopener noreferrer"> <FaAngleDoubleRight /></a>
                                        </OverlayTrigger>
                                 
                                    </>
                                
                            </strong>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet4} className="img-fluid image_display card_display_border" />
                            <Card.Body className="card_display_border">
                            <Card.Title><h3><strong>La Chouette Agence</strong></h3></Card.Title>
                            <Card.Text>
                            Optimisation du SEO, de l'accessibilité  et réaliser des bonnes pratiques en développement web d'un site web existant "La Chouette Agence"
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card_display_border">
                            <strong className="projet_display_footer">
                                Projet4 - OpenClassrooms 2021
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Lien vers le Github</strong>.
                                                </Tooltip>
                                            }
                                            >
                                            <a href="https://github.com/SailajaRadjou/SailajaRadjou_4_27062021" target="_blank" rel="noopener noreferrer"> <FaAngleDoubleRight /></a>
                                        </OverlayTrigger>
                                 
                                    </>
                               
                            </strong>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet5} className="img-fluid image_display card_display_border" />
                            <Card.Body className="card_display_border">
                            <Card.Title><h3><strong>Orinoco</strong></h3></Card.Title>
                            <Card.Text>
                            Création d'un site de E-Commerce.<br /> Développement frontend en HTML, Bootstrap, Sass, Javascript sans utilisation de frameworks par la consommation d'une API fournie.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card_display_border">
                            <strong className="projet_display_footer">
                                Projet5 - OpenClassrooms 2021
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Lien vers le Github</strong>.
                                                </Tooltip>
                                            }
                                            >
                                            <a href="https://github.com/SailajaRadjou/SailajaRadjou_5_16072021" target="_blank" rel="noopener noreferrer"> <FaAngleDoubleRight /></a>
                                        </OverlayTrigger>
                                 
                                    </>
                                
                            </strong>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup className="projet_card_group">
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet6} className="img-fluid card_display_border" />
                            <Card.Body className="card_display_border">
                            <Card.Title><h3><strong>Piiquante !</strong></h3></Card.Title>
                            <Card.Text>
                            Une API d'application d'avis gastronomique<br />
                            <div className="DivForHoverItem"><p>Développement d'une application web nommée "Piquante". Le but est de créer le backend de l'application avec NodeJS, 
                            Framework Express, API REST, MongoDB. Le frontend étant déjà codé et fourni.</p></div>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card_display_border">
                            <strong className="projet_display_footer">
                                Projet6 - OpenClassrooms 2021
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Lien vers le Github</strong>.
                                                </Tooltip>
                                            }
                                            >
                                            <a href="https://github.com/SailajaRadjou/SailajaRadjou_6_230821" target="_blank" rel="noopener noreferrer"> <FaAngleDoubleRight /></a>
                                        </OverlayTrigger>
                                 
                                    </>
                               
                            </strong>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet7} className="img-fluid card_display_border" />
                            <Card.Body className="card_display_border">
                            <Card.Title><h3><strong> Groupomania</strong></h3></Card.Title>
                            <Card.Text className="text_wrap_point">                           
                            Développement Fullstack d'un réseau social d'entreprise pour une société Groupomania
                            avec ReactJS, NodeJS et MySQL.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card_display_border">
                            <strong className="projet_display_footer">
                                Projet7 - OpenClassrooms 2021
                                <>
                                    
                                        <OverlayTrigger placement='bottom'
                                            overlay={
                                                <Tooltip>
                                                <strong>Lien vers le Github</strong>.
                                                </Tooltip>
                                            }
                                            >
                                            <a href="https://github.com/SailajaRadjou/SailajaRadjou_7_27092021" target="_blank" rel="noopener noreferrer"> <FaAngleDoubleRight /></a>
                                        </OverlayTrigger>
                                 
                                    </>
                                
                            </strong>
                            </Card.Footer>
                        </Card>
                    </CardGroup>    
                </div>
            </div>    
        </Fragment>
    )
}

export default Projets

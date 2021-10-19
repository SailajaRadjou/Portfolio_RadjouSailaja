import React, {Fragment} from 'react'
import {CardGroup, Card} from 'react-bootstrap';
import "../styles/projets/projets_overrides.css";
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
                    <h2 className="mySkills">Mes Réalisations</h2><br />
                    <CardGroup>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet3} className="img-fluid image_display" />
                            <Card.Body>
                            <Card.Title>Ohmyfood</Card.Title>
                            <Card.Text>
                                Frontend (HTML5 et CSS3 avec SASS) d'un site de commande auprès de restaurants gastronomiques, avec animations CSS.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Projet3 - OpenClassrooms 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet4} className="img-fluid image_display" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet5} className="img-fluid image_display" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet6} className="img-fluid" />
                            <Card.Body>
                            <Card.Title>Ohmyfood</Card.Title>
                            <Card.Text>
                                Frontend (HTML5 et CSS3 avec SASS) d'un site de commande auprès de restaurants gastronomiques, avec animations CSS.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Projet3 - OpenClassrooms 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card_display">
                            <Card.Img variant="top" src={Projet7} className="img-fluid" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>    
                </div>
            </div>    
        </Fragment>
    )
}

export default Projets

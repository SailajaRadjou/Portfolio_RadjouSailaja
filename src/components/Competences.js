import React, {Fragment} from 'react'
import { CardGroup, Card} from 'react-bootstrap';
import "../styles/competences/competences_overrides.css";
import Front_img from "../images/htmlreact.jpg";
import Back_img from "../images/nodejs.png";
import Db_img from "../images/db_image.jpeg";
import Mise_img from "../images/miseenpage.png";
function Competences() {
    return (
        <Fragment>
            <div className="container" id="competences">
           <div className="col-sm-12">
                <h2 className="sub_title">Compétences</h2><br />
            <CardGroup>
                <Card className="card_display">
                    <Card.Img variant="top" src={Front_img} className="card_display_image" />
                    <Card.Body>
                    <Card.Title>Fontend Languages</Card.Title>
                    <Card.Text>
                    HTML, CSS, Javascript, ReactJS
                    </Card.Text>
                    </Card.Body>
                    
                </Card>                
                <Card className="card_display">
                    <Card.Img variant="top" src={Mise_img} className="card_display_image" />
                    <Card.Body>
                    <Card.Title> Mise en Page </Card.Title>
                    <Card.Text>
                    Bootstrap, Sass
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup><br />
            <CardGroup>
                <Card className="card_display">
                    <Card.Img variant="top" src={Back_img} className="card_display_image" />
                    <Card.Body>
                    <Card.Title>Backend Languages</Card.Title>
                    <Card.Text>
                    NodeJS avec Express
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className="card_display">
                    <Card.Img variant="top" src={Db_img} className="card_display_image" />
                    <Card.Body>
                    <Card.Title> Database</Card.Title>
                    <Card.Text>
                    MySQL, MongoDB
                    </Card.Text>
                    </Card.Body>
                    
                </Card>             
            </CardGroup>
            
            </div>      
            </div> <br />
        </Fragment>
    )
}

export default Competences

import React, {Fragment} from 'react'
import { CardGroup, Card} from 'react-bootstrap';
import Front_img from "../images/htmlreact.jpg";
import Back_img from "../images/nodejs.png";
import Db_img from "../images/db_image.jpeg";
import Mise_img from "../images/miseenpage.png";
function Competences() {
    return (
        <Fragment>
            <div className="container" id="competences">
           <div className="col-sm-12">
                <h2 className="mySkills">Compétences</h2><br />
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Front_img} />
                    <Card.Body>
                    <Card.Title>Fontend Languages</Card.Title>
                    <Card.Text>
                    HTML, CSS, Javascript, ReactJS
                    </Card.Text>
                    </Card.Body>
                    
                </Card>                
                <Card>
                    <Card.Img variant="top" src={Mise_img} />
                    <Card.Body>
                    <Card.Title> Mise en Page </Card.Title>
                    <Card.Text>
                    Bootstrap, Sass
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup><br />
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Back_img} />
                    <Card.Body>
                    <Card.Title>Backend Languages</Card.Title>
                    <Card.Text>
                    NodeJS avec Express
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={Db_img} />
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

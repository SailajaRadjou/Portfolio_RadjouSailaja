import React, {Fragment} from 'react'
import { CardGroup, Card} from 'react-bootstrap';
import Open_img from "../images/open.png";
import Univ_img from "../images/univ_logo.png";
function Parcours() {
    return (
        <Fragment>
            <div className="container" id="parcours">
            <div className="col-sm-12">
                <h2 className="mySkills">Parcours</h2><br />
            <CardGroup>
                <Card className="card_display">
                    <Card.Img variant="top" src={Univ_img} className="img-fluid"/>
                    <Card.Body>
                    <Card.Title>Master en Informatique Appliqué (MCA)</Card.Title>
                    <Card.Text>
                    Université Bharathidasan
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">2001-2004</small>
                    </Card.Footer>
                </Card>
                <Card className="card_display">
                    <Card.Img variant="top" src={Open_img} className="img-fluid image_display"  />
                    <Card.Body>
                    <Card.Title>Formation OpenClassrooms</Card.Title>
                    <Card.Text>
                    Développeur Web Junior
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Mars 2021 à Oct 2021</small>
                    </Card.Footer>
                </Card>
                
            </CardGroup>
            
        </div>        
            </div> <br />
        </Fragment>
    )
}

export default Parcours

import React, {Fragment} from 'react'
import {Card} from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
    return (
        <Fragment><br />
            <div className="container" id="contact">
                <div className="col-sm-12">
                    <Card className="text-center">
                        <Card.Header>Me Contacter</Card.Header>
                        <Card.Body>
                            <Card.Title> Vous souhaitez me contacter ? </Card.Title>
                            <Card.Text>
                        <br />Dans ce cas vous pouvez m'envoyer un mail à l'adresse<br /> 
                        <a className="contact-email" href="mailto:p.sailaja@hotmail.com">p.sailaja@hotmail.com</a> <br /> 
                            </Card.Text>
                            <Card.Text>
                            Vous pouvez également me retrouver sur les sites suivants !<br />
                            <a
                                href="https://www.linkedin.com/in/sailaja-radjou-1b601027/"
                                target="_blank"
                                rel="noopener noreferrer"
                            > <FaLinkedin /></a>
                            <a
                                href="https://github.com/SailajaRadjou"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><FaGithub /></a>
                            <a className="contact-email" href="mailto:p.sailaja@hotmail.com"><FaEnvelope /></a>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card> 
                </div>
            </div>
        </Fragment>
    )
}

export default Contact

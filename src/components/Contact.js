import React, {Fragment} from 'react'
import {Card} from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaCopyright } from "react-icons/fa";
import "../styles/contact/contact.css";
function Contact() {
    return (
        <Fragment><br />
            <div className="container" id="contact">
                <div className="col-sm-12">
                    <Card className="text-center card_display">
                        <Card.Header className="sub_title"><h3>Me Contacter</h3></Card.Header>
                        <Card.Body>
                            <Card.Title> Vous souhaitez me contacter ? </Card.Title>
                            <Card.Text>
                        <br />Dans ce cas vous pouvez m'envoyer un mail à l'adresse<br /> 
                        <a className="contact_email" href="mailto:p.sailaja@hotmail.com">p.sailaja@hotmail.com</a> <br /> 
                            </Card.Text>
                            <Card.Text>
                            Vous pouvez également me retrouver sur les sites suivants !<br />
                            <div className="font_icon">
                            <a
                                href="https://www.linkedin.com/in/sailaja-radjou-1b601027/"
                                target="_blank"
                                rel="noopener noreferrer"
                            > <FaLinkedin className="font_icon_display"/></a>
                            <a
                                href="https://github.com/SailajaRadjou"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><FaGithub className="font_icon_display"/></a>
                            <a className="contact-email" href="mailto:p.sailaja@hotmail.com"><FaEnvelope className="font_icon_display"/></a>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="copy_right"><FaCopyright />&nbsp;<strong>Radjou Sailaja</strong></Card.Footer>
                    </Card> 
                </div>
            </div>
        </Fragment>
    )
}

export default Contact

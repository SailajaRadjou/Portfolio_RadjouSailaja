import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./styles/home/navbar_overrides.css";
import { FaHome } from "react-icons/fa";
import React, {Fragment} from 'react';
import { scroller } from "react-scroll";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Navbar,Nav} from 'react-bootstrap';
import Home from './components/Home';
import Parcours from './components/Parcours';
import Competences from './components/Competences';
import Project from './components/Projets';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     <Fragment>
     <ScrollToTop className="scroll_button" smooth />
            <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home" className="nav_name"><h1 className="nav_name_title"><span className="nav_name_person">Radjou Sailaja &nbsp;&nbsp; </span>
                                    <span className="nav_name_decription"> Developpeur Web Junior Frontend</span></h1>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto nav_link_display">
                                        <Nav.Link className="nav_link" onClick={() => scroller.scrollTo('home', {
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                            })}><FaHome className="home_icon"/></Nav.Link>
                                        <Nav.Link className="nav_link" onClick={() => scroller.scrollTo('parcours', {
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                            })}>Parcours</Nav.Link>
                                        <Nav.Link className="nav_link" onClick={() => scroller.scrollTo('competences', {
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                            })}>Comp??tences</Nav.Link>
                                        <Nav.Link className="nav_link" onClick={() => scroller.scrollTo('projects', {
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                            })}>Portfolio</Nav.Link>
                                        <Nav.Link className="nav_link" onClick={() => scroller.scrollTo('contact', {
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                            })}>Contact</Nav.Link>
                                        
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/" component={ Home }>
                                    <Home />
                                </Route>
                                <Route path="/parcours" component={ Parcours }>
                                    <Parcours />
                                </Route>
                                <Route path="/competences" component={ Competences }>
                                    <Competences />
                                </Route>
                                <Route path="/projects" component={ Project }>
                                    <Project />
                                </Route>
                                <Route path="/contact" component={ Contact }>
                                    <Contact />
                                </Route>
                            </Switch>  
                        </Router>
                    </div>
                </div>
                
        </Fragment>
    </div>
  );
}

export default App;

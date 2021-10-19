import React, {Fragment} from 'react'
import Project from './Projets';
import Contact from './Contact';
import Competences from './Competences';
import Parcours from './Parcours';
import pic_img from "../images/IMGP0247.JPG"; 
function Home() {
    return (
        <Fragment>
            <div className="container" id="home">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rounded-circle">
                                <img src={pic_img} className="rounded-circle mx-auto d-block" alt="My_Profile_Picture" />
                            </div>
                            <br />
                        </div>
                        <div className="col-sm-8">
                            <h2 className="mySkills">Présentations</h2>
                            <br />
                            <p className="skills">Toujours passionné par l'informatique, j'ai commencé mes études par une licence. Ensuite j'ai approfondie mes connaissances par un master en Informatique appliqué.
                                En Mars 2021 j'ai repris ma vie professionnel par une formation continue de développeur web(7 mois) dispensé par Openclassroom.
                                Ainsi j'ai perfectionné mes compétences à travers des projets dans ce domaine.
                                Maintenant je suis à la recherche d'une entreprise pour débuter mon métier.
                            </p>
                        </div>
                    </div>  
                    <Parcours />
                    <Competences />
                    <Project />
                    <Contact />
            </div>
        </Fragment>
    )
}
export default Home;
import "./About.css";
import Photo from "../../images/pfp.webp";
import { useInView } from "react-intersection-observer";

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Pour afficher le contenu une seule fois
        threshold: 0.1, // Définir la proportion visible requise pour déclencher l'affichage
    });

    return (
        <section className="about" id="about">
            <article
                className={`aboutArticle ${inView ? "show" : ""}`}
                ref={ref}
            >
                <div className="flexAbout">
                    <h1>
                        <span>01. </span>À propos
                    </h1>
                    <div className="aboutFlex">
                        <p>Hello, je m'appelle Ibrahima, j'ai 23 ans et ma passion c'est créer des sites internet.</p>
                        <p><span>Mon intérêt pour ce domaine s'est développé</span> lors de mon enfance, je développais des sites sur mes jeux vidéos préférés et c'est ainsi que j'ai pu découvrir le métier de développeur web. Pendant mon parcours scolaire post-bac, j'ai commencé par faire une licence mathématique-informatique, mais je me suis rapidement rendu compte qu'il y avait beaucoup trop de théorie et pas assez de pratique. Je ne me voyais pas m'épanouir en continuant dans cette voie. J'ai alors décidé d'arrêter ce cursus scolaire et de me lancer dans <span>l'apprentissage du développement web</span> en autodidacte, puis avec Openclassrooms pour consolider mes compétences et découvrir de nouvelles technologies telles que...
                            <span> React </span>ou encore
                            <span> MongoDB</span>.
                            <br />
                            <br />
                            Je suis actuellement à la recherche d'un emploi en
                            tant que{" "}
                            <span> développeur web frontend/backend junior !</span>
                            <br />
                            <br />
                            Voici quelques langages et logiciels avec lesquels
                            j’ai récemment travaillés :
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>Figma</li>
                            <li>Notion</li>
                            <li>Express</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
                <div className="imgWrap">
                    <img src={Photo} alt="ibrahima" />
                </div>
            </article>
        </section>
    );
}

export default About;

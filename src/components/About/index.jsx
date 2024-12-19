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
                    <p>Hello, je m'appelle Ibrahima, j'ai 24 ans et ma passion, c'est d'explorer, analyser et valoriser les données pour résoudre des problématiques complexes.</p>
<p>
    Mon parcours a commencé avec une forte passion pour le développement web. Pendant mon enfance, je créais des sites sur mes jeux vidéo préférés, ce qui m'a permis de découvrir les métiers liés à la programmation. Après le lycée, j'ai entrepris une licence en mathématiques et informatique, mais je me suis rapidement rendu compte que ce cursus était trop théorique pour moi. Je voulais un apprentissage plus pratique et concret. J'ai alors décidé de me former en développement web, d'abord en autodidacte, puis via OpenClassrooms, où j'ai appris des technologies comme 
    <span>React</span>, <span>Node.js</span>, et <span>MongoDB</span>.
</p>
<p>
    Au fil du temps, j'ai découvert la puissance des données dans la prise de décision et leur rôle dans l'amélioration des processus. Ce déclic m'a poussé à me spécialiser en analyse de données. Aujourd'hui, je combine mes compétences en développement et en analyse pour apporter des solutions innovantes et adaptées.
</p>
<p>
    Je suis actuellement à la recherche d'un emploi en tant que 
    <span>Data Analyst junior</span>, où je pourrais exploiter mes compétences en développement et en data pour fournir des insights pertinents et automatiser les workflows.
</p>
<p>
    Voici quelques outils, langages et logiciels avec lesquels j’ai récemment travaillé :
</p>
<ul>
    <li>Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
    <li>SQL</li>
    <li>Tableau, Power BI</li>
    <li>React</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Notion</li>
    <li>Figma</li>
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

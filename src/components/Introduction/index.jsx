import "./Introduction.css";

function Introduction() {
    return (
        <div className="introduction">
            <h1>Bonjour ! je m’appelle</h1>
            <h2>Ibrahima Embalo.</h2>
            <h3>Je suis data analyst junior !</h3>
            <p>
                Avec un diplome de data analyst d'OpenClassroom niveau 6 (equivalent bac+4) Je suis spécialisé dans l'analyse de données et la visualisation, mais j'ai également des compétences solides en développement backend et frontend. En ce moment, je suis 
<span>à la recherche d'un emploi</span> en tant que 
<span>Data Analyst junior</span>, où je pourrais mettre à profit mes compétences techniques pour explorer, analyser et valoriser les données, tout en créant des solutions automatisées et innovantes.
            </p>
            <a href="https://github.com/ibrahimae">
                <button>Voici mon GitHub!</button>
            </a>
        </div>
    );
}

export default Introduction;

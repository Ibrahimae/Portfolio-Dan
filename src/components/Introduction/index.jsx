import "./Introduction.css";

function Introduction() {
    return (
        <div className="introduction">
            <h1>Bonjour ! je m’appelle</h1>
            <h2>Ibrahima Embalo.</h2>
            <h3>Je suis développeur Frontend/Backend !</h3>
            <p>
                Avec un diplome de developpeur web de OpenClassroom niveau 5 (equivalent bac+2) je suis spécialisé dans le frontend mais j'ai aussi des compétences en backend. En ce
                moment, je suis
                <span> à la recherche d'un job </span> en tant que
                <span> développeur frontend/backend junior !</span>
            </p>
            <a href="https://github.com/ibrahimae">
                <button>Voici mon GitHub!</button>
            </a>
        </div>
    );
}

export default Introduction;

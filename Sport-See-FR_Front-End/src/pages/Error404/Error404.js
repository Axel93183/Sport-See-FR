import { Link } from "react-router-dom";
import "./Error404.scss";

/**
 * Error404 is a component that displays a 404 error message to the user.
 * It includes a `Link` component to allow the user to return to the homepage.
 * @return {ReactElement} The JS markup for the Error404 component
 */

function Error404() {
  return (
    <div className="container-error404">
      <h1 className="title-error404">404</h1>
      <h2 className="description-error404">
        Oups! La page que vous demandez n'existe pas ou est en cours de
        réalisation.
      </h2>
      <Link to={"/"}>
        <p className="link-home">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}

export default Error404;

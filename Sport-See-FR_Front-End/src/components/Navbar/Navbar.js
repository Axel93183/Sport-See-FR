import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-sportsee.png";
import "./Navbar.scss";

/**
 * Navbar component renders a navigation bar with links.
 *
 * This component uses `NavLink` from `react-router-dom` to create navigation links for different sections of the application.
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <ul>
          <img src={logo} alt="Logo de Sport See" />
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/user/:id">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Réglage</NavLink>
          </li>
          <li>
            <NavLink to="/community">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

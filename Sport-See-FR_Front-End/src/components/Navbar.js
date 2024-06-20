import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-sportsee.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo de Sport See" />
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to=" /user/:id">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Réglage</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/community">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

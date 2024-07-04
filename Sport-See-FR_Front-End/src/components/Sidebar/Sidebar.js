import { NavLink } from "react-router-dom";
import bikeIcon from "../../assets/images/SideBarIcons/bike-icon.svg";
import bodybuildingIcon from "../../assets/images/SideBarIcons/bodybuilding-icon.svg";
import swimIcon from "../../assets/images/SideBarIcons/swim-icon.svg";
import yogaIcon from "../../assets/images/SideBarIcons/yoga-icon.svg";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="icon-container">
        <ul>
          <li>
            <NavLink>
              <img src={yogaIcon} alt="logo de yoga" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={swimIcon} alt="logo de natation" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={bikeIcon} alt="logo de cyclisme" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={bodybuildingIcon} alt="logo d'haltère" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className="copyright">Copiryght, SportSee 2024</p>
    </div>
  );
}

export default Sidebar;

import { NavLink } from "react-router-dom";
import bikeIcon from "../../assets/images/bike-icon.svg";
import bodybuildingIcon from "../../assets/images/bodybuilding-icon.svg";
import swimIcon from "../../assets/images/swim-icon.svg";
import yogaIcon from "../../assets/images/yoga-icon.svg";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="icon-container">
        <ul>
          <li>
            <NavLink>
              <img src={yogaIcon} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={swimIcon} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={bikeIcon} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={bodybuildingIcon} alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className="copyright">Copiryght, SportSee 2024</p>
    </div>
  );
}

export default Sidebar;

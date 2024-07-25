import { NavLink } from "react-router-dom";
import bikeIcon from "../../assets/images/SideBarIcons/bike-icon.svg";
import bodybuildingIcon from "../../assets/images/SideBarIcons/bodybuilding-icon.svg";
import swimIcon from "../../assets/images/SideBarIcons/swim-icon.svg";
import yogaIcon from "../../assets/images/SideBarIcons/yoga-icon.svg";
import "./Sidebar.scss";

/**
 * Sidebar component renders a navigation bar with icons.
 *
 * This component uses `NavLink` from `react-router-dom` to create navigation links with images representing different activities.
 *
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="icon-container">
        <ul>
          <li>
            <NavLink to="/yoga">
              <img src={yogaIcon} alt="logo de yoga" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/swimming">
              <img src={swimIcon} alt="logo de natation" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cycling">
              <img src={bikeIcon} alt="logo de cyclisme" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bodybuilding">
              <img src={bodybuildingIcon} alt="logo d'haltère" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className="copyright">Copyright, SportSee 2024</p>
    </div>
  );
};

export default Sidebar;

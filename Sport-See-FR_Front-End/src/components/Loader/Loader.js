import MacronutrientIcon from "./../MacronutrientIcon/MacronutrientIcon";
import "./Loader.scss";

/**
 * Loader component
 *
 * This component renders a loader with an icon and a loading message.
 *
 * @param {object} props - Component properties
 * @param {string} props.image - The source URL of the image
 * @param {string} props.icon - The class name for the icon
 * @param {boolean} [props.small] - Whether the loader is small
 * @returns {React.JSX.Element} A component that displays a loading icon and message
 */
const Loader = ({ image, icon, small }) => {
  return (
    <div
      className={`loader-container ${small ? "loader-container-small" : ""}`}
    >
      <div id="logo-loader">
        <MacronutrientIcon image={image} icon={icon} />
        <p>Loading...</p>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

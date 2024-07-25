import "./MacronutrientIcon.scss";

/**
 * MacronutrientIcon component
 *
 * This component renders an image with a specific icon class.
 * The image source and the icon class are dynamically provided.
 *
 * @param {object} props - Component properties
 * @param {string} props.image - The source URL of the image
 * @param {string} props.icon - The class name for the icon
 * @returns {React.JSX.Element} A component that displays an icon and an image
 */
const MacronutrientIcon = ({ image, icon }) => {
  return (
    <div className="icon-container">
      <img className={icon} src={image} alt="logo" />
    </div>
  );
};

export default MacronutrientIcon;

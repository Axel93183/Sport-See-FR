import "./MacronutrientIcon.scss";

/**
 * MacronutrientIcon component
 *
 * This component renders an image with a specific icon class.
 * The image source and the icon class are dynamically provided.
 *
 * @returns {React.JSX.Element} A component that displays an icon and an image.
 */

function MacronutrientIcon({ image, icon }) {
  return (
    <div className="icon-container">
      <img className={icon} src={image} alt="logo" />
    </div>
  );
}

export default MacronutrientIcon;

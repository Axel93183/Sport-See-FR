import MacronutrientIcon from "../MacronutrientIcon/MacronutrientIcon";
import "./MacronutrientCard.scss";

/**
 * MacronutrientCard component
 *
 * This component renders an icon and an image via the IconCard component,
 * along with the user's data (such as protein, calories, lipids, carbohydrates).
 *
 * @param {object} props - Component properties
 * @param {string} props.image - The source URL of the image
 * @param {string} props.icon - The class name for the icon
 * @param {string} props.data - The data to display (e.g., protein, calories)
 * @param {string} props.name - The name of the macronutrient
 * @returns {React.JSX.Element} A component that displays an icon, an image, and user data
 */
const MacronutrientCard = ({ image, icon, data, name }) => {
  return (
    <div className="macronutrient-card">
      <MacronutrientIcon image={image} icon={icon} />
      <div>
        <p className="result-macronutrient-card">{data}</p>
        <p className="calorie-macronutrient-card">{name}</p>
      </div>
    </div>
  );
};

export default MacronutrientCard;

import MacronutrientIcon from "../MacronutrientIcon/MacronutrientIcon";
import "./MacronutrientCard.scss";

/**
 * MacronutrientCard component
 *
 * This component renders an icon and an image via the IconCard component,
 * along with the user's data (such as protein, calories, lipids, carbohydrates).
 *
 * @returns {React.JSX.Element} A component that displays an icon, an image, and user data.
 */

function MacronutrientCard({ image, icon, data, name }) {
  return (
    <div className="macronutrient-card">
      <MacronutrientIcon image={image} icon={icon} />
      <div>
        <p className="result-macronutrient-card">{data}</p>
        <p className="calorie-macronutrient-card">{name}</p>
      </div>
    </div>
  );
}

export default MacronutrientCard;

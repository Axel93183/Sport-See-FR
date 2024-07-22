import "./Loader.scss";
import MacronutrientIcon from "./../MacronutrientIcon/MacronutrientIcon";

function Loader({ image, icon }) {
  return (
    <div className="loader-container">
      <div id="logo-loader">
        <MacronutrientIcon image={image} icon={icon} />
        <p>Loading...</p>
      </div>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;

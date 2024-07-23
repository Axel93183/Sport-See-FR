import MacronutrientIcon from "./../MacronutrientIcon/MacronutrientIcon";

import "./Loader.scss";

function Loader({ image, icon, small }) {
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
}

export default Loader;

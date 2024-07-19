/**
 * Function to retrieve only the day of a date
 * @param {string} date
 * @returns {string}
 */
function convertToDate(date) {
  const maDate = new Date(date);
  const jour = maDate.getDate();
  return jour.toString();
}

/**
 * Calorie Conversion
 * @param {number} calorie
 * @returns {number}
 */
function convertToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3).replace(".", ",");
}

/**
 * Function to display only the first letter of the retrieved day
 * @param {number} day
 * @returns {string}
 */
function getDayOfWeek(day) {
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const dayString = daysOfWeek[day - 1];
  return dayString.charAt(0);
}

/**
 * Function translate a specific object from English to French
 * @param {string} text
 * @returns {string}
 */
function translateEnglishToFrench(text) {
  const dictionary = {
    energy: "Énergie",
    strength: "Force",
    intensity: "Intensité",
    speed: "Vitesse",
    cardio: "Cardio",
    endurance: "Endurance",
  };

  return dictionary[text];
}

/**
 * Percentage conversion
 * @param {number} score
 * @returns {number}
 */
function convertToPercent(score) {
  let nombre = score;
  let pourcentage = nombre * 100; //Multiplication by 100 to convert to percentage
  return pourcentage + "%";
}

export {
  convertToKCal,
  convertToDate,
  getDayOfWeek,
  translateEnglishToFrench,
  convertToPercent,
};

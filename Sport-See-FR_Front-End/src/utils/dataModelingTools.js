/**
 * Function to retrieve only the day of a date
 * @param {string} date - The date string to convert.
 * @returns {string} - The day of the month as a string.
 */
function convertToDate(date) {
  const maDate = new Date(date);
  const jour = maDate.getDate();
  return jour.toString();
}

/**
 * Calorie Conversion
 * @param {number} calorie - The number of calories to convert.
 * @returns {number} - The number of kilocalories.
 */
function convertToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3).replace(".", ",");
}

/**
 * Function to display only the first letter of the retrieved day
 * @param {number} day - The day of the week (1 for Monday, 7 for Sunday).
 * @returns {string} - The first letter of the day of the week in French.
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
 * @param {string} text - The text to translate.
 * @returns {string} - The translated text.
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
 * @param {number} score - The score to convert.
 * @returns {number} - The score as a percentage string.
 */
function convertToPercent(score) {
  let nombre = score;
  let pourcentage = nombre * 100; // Multiplication by 100 to convert to percentage
  return pourcentage + "%";
}

/**
 * Transforms an array of session data into a standardized format.
 * @param {Object[]} sessions - Array of session data objects.
 * @param {string} sessions[].day - Date of the session in string format.
 * @param {number} sessions[].kilogram - Weight recorded during the session.
 * @param {number} sessions[].calories - Calories burned during the session.
 * @returns {Object[]} Array of transformed session data objects.
 * @returns {Object} Transformed data object.
 * @returns {Date} transformedDataObject.day - Date of the session as a Date object.
 * @returns {number} transformedDataObject.kilogram - Weight recorded during the session.
 * @returns {number} transformedDataObject.calories - Calories burned during the session.
 */
function transformActivityData(sessions) {
  return sessions.map((item) => ({
    day: convertToDate(item.day),
    kilogram: item.kilogram,
    calories: item.calories,
  }));
}

export {
  convertToDate,
  convertToKCal,
  convertToPercent,
  getDayOfWeek,
  transformActivityData,
  translateEnglishToFrench,
};

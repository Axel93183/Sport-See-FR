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
function converToKCal(calorie) {
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

export { converToKCal, convertToDate, getDayOfWeek };

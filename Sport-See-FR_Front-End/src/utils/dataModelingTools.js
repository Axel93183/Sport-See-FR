/**
 * Function to retrieve only the day of a date
 * @param {string} date
 * @returns {string}
 */
function convertToDate(date) {
  // Create a Date object from the character string representing the date
  const maDate = new Date(date);
  // Extract the day of the month corresponding to this date
  const jour = maDate.getDate();
  // Display the day of the month
  return jour.toString();
}

export { convertToDate };

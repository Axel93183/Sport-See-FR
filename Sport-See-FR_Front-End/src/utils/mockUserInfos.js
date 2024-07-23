/**
 * @typedef {Object} UserInfo
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {number} age - The age of the user.
 */

/**
 * @typedef {Object} KeyData
 * @property {number} calorieCount - The total calorie count for the user.
 * @property {number} proteinCount - The total amount of protein consumed by the user (in grams).
 * @property {number} carbohydrateCount - The total amount of carbohydrates consumed by the user (in grams).
 * @property {number} lipidCount - The total amount of lipids consumed by the user (in grams).
 */

/**
 * @typedef {Object} UserData
 * @property {UserInfo} userInfos - Contains personal information about the user.
 * @property {number} todayScore - The user's score for today (between 0 and 1).
 * @property {KeyData} keyData - Nutritional information for the user.
 */

/**
 * @typedef {Object} User
 * @property {number} id - The unique identifier of the user.
 * @property {UserData} data - Contains the user's data.
 */

/**
 * Mock data representing user information.
 *
 * This array contains sample user information for multiple users, including:
 * - User ID
 * - Personal information (name, age)
 * - Today's score
 * - Nutritional data (calories, proteins, carbohydrates, lipids)
 *
 * @type {User[]}
 */
const mockUserInfos = [
  {
    id: 12,
    data: {
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  },
  {
    id: 18,
    data: {
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34,
      },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  },
];

export default mockUserInfos;

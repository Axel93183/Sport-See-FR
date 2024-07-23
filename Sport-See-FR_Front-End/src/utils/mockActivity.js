/**
 * @typedef {Object} Session
 * @property {string} day - The date of the session in the format "YYYY-MM-DD".
 * @property {number} kilogram - The weight of the user in kilograms on the given day.
 * @property {number} calories - The number of calories burned on the given day.
 */

/**
 * @typedef {Object} UserActivity
 * @property {Object} data - Contains the user data.
 * @property {number} data.userId - The unique identifier of the user.
 * @property {Session[]} data.sessions - An array of session data for the user.
 */

/**
 * Mock data representing user activity.
 *
 * This array contains sample activity data for multiple users, including:
 * - User ID
 * - Session dates
 * - Weight in kilograms
 * - Calories burned
 *
 * @type {UserActivity[]}
 */
const mockActivity = [
  {
    data: {
      userId: 12,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 80,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 80,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 81,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 81,
          calories: 290,
        },
        {
          day: "2020-07-05",
          kilogram: 80,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 78,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 76,
          calories: 390,
        },
      ],
    },
  },
  {
    data: {
      userId: 18,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500,
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390,
        },
      ],
    },
  },
];

export default mockActivity;

/**
 * @typedef {Object} Session
 * @property {number} day - The day of the week, represented as a number (1 for Monday, 7 for Sunday).
 * @property {number} sessionLength - The length of the session in minutes for the given day.
 */

/**
 * @typedef {Object} UserAverageSessions
 * @property {Object} data - Contains the user data.
 * @property {number} data.userId - The unique identifier of the user.
 * @property {Session[]} data.sessions - An array of average session data for the user.
 */

/**
 * Mock data representing average session lengths for users.
 *
 * This array contains sample average session data for multiple users, including:
 * - User ID
 * - Day of the week
 * - Length of the session in minutes
 *
 * @type {UserAverageSessions[]}
 */
const mockAverageSessions = [
  {
    data: {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 23,
        },
        {
          day: 3,
          sessionLength: 45,
        },
        {
          day: 4,
          sessionLength: 50,
        },
        {
          day: 5,
          sessionLength: 0,
        },
        {
          day: 6,
          sessionLength: 0,
        },
        {
          day: 7,
          sessionLength: 60,
        },
      ],
    },
  },
  {
    data: {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 40,
        },
        {
          day: 3,
          sessionLength: 50,
        },
        {
          day: 4,
          sessionLength: 30,
        },
        {
          day: 5,
          sessionLength: 30,
        },
        {
          day: 6,
          sessionLength: 50,
        },
        {
          day: 7,
          sessionLength: 50,
        },
      ],
    },
  },
];

export default mockAverageSessions;

/**
 * @typedef {Object} PerformanceData
 * @property {number} value - The performance value for the given type of activity.
 * @property {number} kind - The type of activity, represented by a numeric identifier.
 */

/**
 * @typedef {Object} PerformanceKind
 * @property {number} 1 - Cardio.
 * @property {number} 2 - Energy.
 * @property {number} 3 - Endurance.
 * @property {number} 4 - Strength.
 * @property {number} 5 - Speed.
 * @property {number} 6 - Intensity.
 */

/**
 * @typedef {Object} UserPerformance
 * @property {Object} data - Contains the user performance data.
 * @property {number} data.userId - The unique identifier of the user.
 * @property {PerformanceKind} data.kind - A mapping of performance types to their numeric identifiers.
 * @property {PerformanceData[]} data.data - An array of performance metrics for the user.
 */

/**
 * Mock data representing user performance metrics.
 *
 * This array contains sample performance data for multiple users, including:
 * - User ID
 * - Performance metrics for various activity types
 * - A mapping of activity types to their identifiers
 *
 * @type {UserPerformance[]}
 */
const mockPerformance = [
  {
    data: {
      userId: 12,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  },
  {
    data: {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 200,
          kind: 1,
        },
        {
          value: 240,
          kind: 2,
        },
        {
          value: 80,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 220,
          kind: 5,
        },
        {
          value: 110,
          kind: 6,
        },
      ],
    },
  },
];

export default mockPerformance;

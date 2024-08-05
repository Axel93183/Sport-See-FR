import { convertToPercent } from "./dataModelingTools";

/** ACTIVITY BAR CHART **/

/**
 * Configuration object for the ActivityBarChart component.
 * @type {Object}
 * @property {string} title - The title of the bar chart.
 * @property {Object} yAxis1 - Configuration for the primary Y-axis.
 * @property {string} yAxis1.dataKey - Data key for the primary Y-axis.
 * @property {string} yAxis1.name - Name for the primary Y-axis legend.
 * @property {string} yAxis1.fill - Fill color for the primary Y-axis bars.
 * @property {Object} yAxis2 - Configuration for the secondary Y-axis.
 * @property {string} yAxis2.dataKey - Data key for the secondary Y-axis.
 * @property {string} yAxis2.name - Name for the secondary Y-axis legend.
 * @property {string} yAxis2.fill - Fill color for the secondary Y-axis bars.
 * @property {Object[]} legendPayload - Payload for the chart legend.
 * @property {string} legendPayload[].value - Legend item text.
 * @property {string} legendPayload[].type - Type of legend item (e.g., "circle").
 * @property {string} legendPayload[].color - Color of the legend item.
 */

export const activityBarChartConfig = {
  title: "Activité quotidienne",
  yAxis1: {
    dataKey: "kilogram",
    name: "Poids(kg)",
    fill: "#282D30",
  },
  yAxis2: {
    dataKey: "calories",
    name: "Calories brûlées (kCal)",
    fill: "#E60000",
  },
  legendPayload: [
    {
      value: "Poids (kg)",
      type: "circle",
      color: "#282D30",
    },
    {
      value: "Calories brûlées (kCal)",
      type: "circle",
      color: "#E60000",
    },
  ],
};

/** SCORE RADIAL BAR CHART */

/**
 * Generates configuration data for the ScoreRadialBarChart.
 * Converts user score information into a format suitable for the RadialBarChart.
 * @param {Object} userInfos - User information object.
 * @param {Object} userInfos.data - Data object containing the user's score or today's score.
 * @param {number} [userInfos.data.score] - User's overall score (optional).
 * @param {number} [userInfos.data.todayScore] - User's score for today (optional).
 * @returns {Object[]} Array of configuration objects for the RadialBarChart.
 */

export const scoreRadialBarChartConfig = (userInfos) => [
  {
    id: 1,
    todayScore: (userInfos.data.score ?? userInfos.data.todayScore) * 100,
    fill: "#E60000",
  },
  { id: 2, todayScore: 100, opacity: 0 },
];

/**
 * Renders a custom legend for the ScoreRadialBarChart.
 * Displays the user's score as a percentage of their goal.
 * @param {Object} userInfos - User information object.
 * @param {Object} userInfos.data - Data object containing the user's score or today's score.
 * @param {number} [userInfos.data.score] - User's overall score (optional).
 * @param {number} [userInfos.data.todayScore] - User's score for today (optional).
 * @returns {JSX.Element} JSX element representing the custom legend.
 */

export const scoreRadialBarChartRenderLegend = (userInfos) => {
  return (
    <div className="containerScore">
      <p className="resultScore">
        {convertToPercent(userInfos.data.score ?? userInfos.data.todayScore)}
      </p>
      <span className="descriptionScore">
        de votre <br /> objectif
      </span>
    </div>
  );
};

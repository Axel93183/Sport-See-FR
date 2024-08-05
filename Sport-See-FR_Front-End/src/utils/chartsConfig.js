/** ACTIVITY BAR CHARTS **/

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

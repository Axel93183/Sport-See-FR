import {
  convertToPercent,
  translateEnglishToFrench,
} from "./dataModelingTools";

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

/** PERFORMANCE RADAR CHART */

/**
 * Configures data for the performance radar chart by translating and sorting performance metrics.
 * Translates performance kinds from English to French and returns the data sorted by predefined categories.
 * @param {Object} performance - Raw performance data.
 * @param {Array} performance.data - Array of performance metrics, each with a `kind` and `value`.
 * @param {Object} performance.kind - Mapping of `kind` keys to their descriptions in English.
 * @returns {Array} Sorted and translated radar chart data.
 */

export const performanceRadarChartConfig = (performance) => {
  const { data: performanceItems, kind: kindMap } = performance.data;

  const translatedData = performanceItems.map((item) => {
    const kindKey = item.kind;
    const kindString = kindMap[kindKey];
    const translatedKind = translateEnglishToFrench(kindString);
    return { ...item, kind: translatedKind };
  });

  return [
    translatedData.find((item) => item.kind === "Intensité"),
    translatedData.find((item) => item.kind === "Vitesse"),
    translatedData.find((item) => item.kind === "Force"),
    translatedData.find((item) => item.kind === "Endurance"),
    translatedData.find((item) => item.kind === "Énergie"),
    translatedData.find((item) => item.kind === "Cardio"),
  ];
};

/**
 * Renders a customized tick for the radar chart's polar angle axis.
 * Adjusts the position and alignment of the tick label based on the label's value.
 * @param {Object} props - Tick properties.
 * @param {number} props.x - The x-coordinate for the tick label.
 * @param {number} props.y - The y-coordinate for the tick label.
 * @param {Object} props.payload - The data for the tick label, including `value`.
 * @returns {JSX.Element} Customized tick label for the radar chart.
 */

export const performanceRadarChartRenderCustomizedTick = ({
  x,
  y,
  payload,
}) => {
  const newY = payload.value === "Endurance" ? y + 10 : y;

  let textAnchor;
  switch (payload.value) {
    case "Intensité":
    case "Endurance":
      textAnchor = "middle";
      break;
    case "Vitesse":
    case "Force":
      textAnchor = "start";
      break;
    case "Cardio":
    case "Énergie":
      textAnchor = "end";
      break;
    default:
      textAnchor = "middle";
  }

  return (
    <text x={x} y={newY} textAnchor={textAnchor} fill="#fff">
      <tspan x={x} dy="0em">
        {payload.value}
      </tspan>
    </text>
  );
};

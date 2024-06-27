import "./DailyActivityChart.scss";

/**
 * DailyActivityChart component
 * @param {ReactNode} chart - The chart component to be rendered
 */
function DailyActivityChart({ chart }) {
  return <div className="daily-activity-chart-container">{chart}</div>;
}

export default DailyActivityChart;

import "./DailyActivityChart.scss";

/**
 * DailyActivityChart component
 *
 * This component renders a container for the daily activity chart.
 *
 * @param {object} props - Component properties
 * @param {React.JSX.Element} props.chart - The chart component to be rendered
 * @returns {React.JSX.Element} A component that displays the daily activity chart
 */
const DailyActivityChart = ({ chart }) => {
  return <div className="daily-activity-chart-container">{chart}</div>;
};

export default DailyActivityChart;

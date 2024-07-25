import "./MeasurementCard.scss";

/**
 * MeasurementCard component
 *
 * This component renders a measurement card that displays a chart.
 *
 * @param {object} props - Component properties
 * @param {React.JSX.Element} props.chart - The chart object to display
 * @returns {React.JSX.Element} A component that displays a measurement chart
 */
const MeasurementCard = ({ chart }) => {
  return <div className="measurement-card">{chart}</div>;
};

export default MeasurementCard;

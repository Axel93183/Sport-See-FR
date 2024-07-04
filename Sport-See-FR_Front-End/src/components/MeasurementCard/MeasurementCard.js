import "./MeasurementCard.scss";

/**
 * CalorieMeasurementCard component
 * @param {object} chart - The chart object to display
 */
function MeasurementCard({ chart }) {
  return <div className="measurement-card">{chart}</div>;
}

export default MeasurementCard;

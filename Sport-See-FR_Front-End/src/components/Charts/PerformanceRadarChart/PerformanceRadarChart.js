import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { performanceRadarChartRenderCustomizedTick } from "../../../utils/chartsConfig";

/**
 * Renders a radar chart to display user performance data.
 * Utilizes a responsive container and custom tick rendering for the radar chart.
 * @param {Object} props - Component properties.
 * @param {Array} props.data - Data to be displayed on the radar chart, with keys for 'kind' and 'value'.
 * @returns {JSX.Element} Radar chart component.
 */

const PerformanceRadarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={data} style={{ padding: 5 }}>
        <PolarGrid fillOpacity={0.7} strokeWidth={2} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={performanceRadarChartRenderCustomizedTick}
          stroke="white"
          tickLine={false}
        />
        <Radar
          dataKey="value"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceRadarChart;

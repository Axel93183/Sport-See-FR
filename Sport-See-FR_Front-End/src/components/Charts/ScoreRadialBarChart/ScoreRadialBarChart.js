import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

import { scoreRadialBarChartRenderLegend } from "../../../utils/chartsConfig";

import "./ScoreRadialBarChart.scss";

/**
 * ScoreRadialBarChart component.
 * Renders a radial bar chart to display a score with a custom legend.
 * @param {Object} props - Component properties.
 * @param {Object[]} props.formattedData - Array of formatted data objects for the RadialBarChart.
 * @param {Object} props.data - Data object used for rendering the custom legend.
 * @returns {JSX.Element} ScoreRadialBarChart component.
 */

const ScoreRadialBarChart = ({ formattedData, data }) => {
  const renderLegend = () => scoreRadialBarChartRenderLegend(data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="titleRadialBarChart">Score</p>
      <RadialBarChart
        innerRadius={70}
        outerRadius={90}
        data={formattedData}
        startAngle={90}
        endAngle={450}
      >
        <Legend
          content={renderLegend}
          layout="vertical"
          align="center"
          verticalAlign="middle"
        />
        <RadialBar
          minAngle={15}
          background
          clockWise={true}
          dataKey="todayScore"
          cornerRadius="10"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreRadialBarChart;

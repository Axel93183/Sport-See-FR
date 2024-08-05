import { useEffect, useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  CustomizedCursor,
  averageSessionsLineChartRenderLegend,
} from "../../../utils/chartsConfig";
import "./AverageSessionsLineChart.scss";

/**
 * AverageSessionsLineChart component.
 * Renders a responsive line chart showing average session lengths with custom cursor.
 * @param {Object} props - Component properties.
 * @param {Object} props.data - Data to be displayed in the line chart, containing `preparedData`.
 * @returns {JSX.Element} A responsive line chart component.
 */

const AverageSessionsLineChart = ({ data }) => {
  const [viewBox, setViewBox] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("chart-container");
      if (container) {
        setViewBox({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContainer id="chart-container" width="100%" height="100%">
      <LineChart
        data={data.preparedData}
        margin={{ top: 0, right: 15, left: 15, bottom: 0 }}
      >
        <XAxis
          axisLine={false}
          dataKey="day"
          tickLine={false}
          tick={{
            fill: "white",
            fontWeight: "500",
            opacity: "0.5",
            fontSize: 12,
          }}
        />
        <YAxis hide={true} dataKey="sessionLength" domain={[0, 120]} />
        <Tooltip
          formatter={(value, name) => [`${value} ${name}`]}
          labelFormatter={() => ``}
          contentStyle={{ backgroundColor: "white" }}
          itemStyle={{ color: "black" }}
          cursor={<CustomizedCursor viewBox={viewBox} />}
        />
        <Line
          name="min"
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={3}
          dot={false}
          style={{
            color: "white",
            opacity: "0.5",
          }}
        />
        <Legend
          content={averageSessionsLineChartRenderLegend}
          verticalAlign="top"
          align="left"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default AverageSessionsLineChart;

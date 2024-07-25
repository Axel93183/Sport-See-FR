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
import { getDayOfWeek } from "../../../utils/dataModelingTools.js";
import "./TinyLineChart.scss";

/**
 * TinyLineChart component
 * Displays the average duration of a session with a legend "Durée moyenne des sessions".
 *
 * @example
 *  const averageSessions = {
 *    data: {
 *      sessions: [
 *        { day: 'L', sessionLength: 30 },
 *        { day: 'M', sessionLength: 45 },
 *        ... other sessions
 *      ]
 *    }
 *  };
 *  <TinyLineChart averageSessions={averageSessions} />
 *
 * @returns {React.Component} A component that renders a line chart.
 */
const TinyLineChart = ({ averageSessions }) => {
  const items = averageSessions.data.sessions.map((item) => {
    return { day: getDayOfWeek(item.day), sessionLength: item.sessionLength };
  });

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

  const CustomizedCursor = ({ points, viewBox }) => {
    const { x } = points[0];
    const borderRadius = 5;

    // Rectangle width and height
    const width = viewBox.width - x;
    const height = viewBox.height;

    // Create a path for the rectangle
    const path = `
      M${x},0
      L${x + width - borderRadius},0
      Q${x + width},0 ${x + width},${borderRadius}
      L${x + width},${height - borderRadius}
      Q${x + width},${height} ${x + width - borderRadius},${height}
      L${x},${height}
      Z
    `;

    return <path d={path} fill="rgba(178, 0, 0, 0.3)" />;
  };

  const renderLegend = () => {
    return (
      <p className="legend-of-TinyLineChart">Durée moyenne des sessions</p>
    );
  };

  return (
    <ResponsiveContainer id="chart-container" width="100%" height="100%">
      <LineChart
        data={items}
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
        <Legend content={renderLegend} verticalAlign="top" align="left" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLineChart;

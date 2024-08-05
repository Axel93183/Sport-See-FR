import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * ActivityBarChart component.
 * Renders a bar chart with activity data based on the provided configuration.
 * @param {Object} props - Component properties.
 * @param {Object[]} props.data - Data to be displayed in the chart.
 * @param {Object} props.config - Configuration for the chart.
 * @param {string} props.config.title - Title of the chart.
 * @param {Object} props.config.yAxis1 - Configuration for the primary Y-axis.
 * @param {string} props.config.yAxis1.dataKey - Data key for the primary Y-axis.
 * @param {string} props.config.yAxis1.name - Name for the primary Y-axis legend.
 * @param {string} props.config.yAxis1.fill - Fill color for the primary Y-axis bars.
 * @param {Object} props.config.yAxis2 - Configuration for the secondary Y-axis.
 * @param {string} props.config.yAxis2.dataKey - Data key for the secondary Y-axis.
 * @param {string} props.config.yAxis2.name - Name for the secondary Y-axis legend.
 * @param {string} props.config.yAxis2.fill - Fill color for the secondary Y-axis bars.
 * @param {Object[]} props.config.legendPayload - Payload for the legend.
 * @returns {JSX.Element} Bar chart component.
 */

const ActivityBarChart = ({ data, config }) => {
  return (
    <>
      <p className="activity-chart-title">{config.title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={40}
          barGap={8}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="4 2" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            dataKey={config.yAxis1.dataKey}
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="yAxis2"
            dataKey={config.yAxis2.dataKey}
            orientation="left"
            tickLine={false}
            axisLine={false}
            tick={false}
          />
          <Tooltip
            formatter={(value, name) => [`${value} - ${name}`]}
            labelFormatter={() => ``}
            contentStyle={{ backgroundColor: "#E60000", border: "#E60000" }}
            itemStyle={{ color: "white" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={24}
            wrapperStyle={{ paddingBottom: 60 }}
            formatter={(value) => {
              return <span style={{ color: "#74798C" }}>{value}</span>;
            }}
            payload={config.legendPayload}
          />
          <Bar
            name={config.yAxis1.name}
            dataKey={config.yAxis1.dataKey}
            fill={config.yAxis1.fill}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="yAxis2"
            name={config.yAxis2.name}
            dataKey={config.yAxis2.dataKey}
            fill={config.yAxis2.fill}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ActivityBarChart;

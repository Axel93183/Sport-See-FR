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
import { convertToDate } from "../../utils/dataModelingTools";

/**
 * ActivityBarChart component recharts
 *
 * @description This component displays a bar chart illustrating the daily evolution of weight and calories burned. The chart includes a tooltip that shows synthetic results on hover, and a legend indicating the different data series (Calories, Kilogram). The x-axis represents days, while the y-axis displays weight and calories. The chart is responsive and adapts to different screen sizes.
 */
function ActivityBarChart({ activity }) {
  const items = activity.data.sessions.map((item) => {
    return {
      day: convertToDate(item.day),
      kilogram: item.kilogram,
      calories: item.calories,
    };
  });

  let minKilogram = items[0].kilogram;
  let maxKilogram = items[0].kilogram;

  for (let i = 1; i < items.length; i++) {
    if (items[i].kilogram < minKilogram) {
      minKilogram = items[i].kilogram;
    }
    if (items[i].kilogram > maxKilogram) {
      maxKilogram = items[i].kilogram;
    }
  }

  return (
    <>
      <p className="activity-chart-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={items}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={40}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="4 2" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            dataKey="kilogram"
            domain={[minKilogram, maxKilogram + 1]}
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="redBar"
            dataKey="calories"
            domain={[0, 1000]}
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
            dataKey="calories"
            iconType="circle"
          />
          <Bar
            name="Poids(kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="redBar"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ActivityBarChart;

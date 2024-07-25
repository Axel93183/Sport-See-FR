import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { translateEnglishToFrench } from "../../../utils/dataModelingTools";
import "./SimpleRadarChart.scss";

/**
 * SimpleRadarChart component recharts
 * @example userID: 18 / data : 1 :{value: 240, kind: 'Energie'} / kind : 4 : "strength"
 * @returns a component that displays the user's value as a radar for the following criteria: "Cardio, Energie, Endurance, Force, Vitesse,Intensité"
 */
const SimpleRadarChart = ({ performance }) => {
  const { data: performanceItems, kind: kindMap } = performance.data;

  const translatedData = performanceItems.map((item) => {
    const kindKey = item.kind;
    const kindString = kindMap[kindKey];
    const translatedKind = translateEnglishToFrench(kindString);
    return { ...item, kind: translatedKind };
  });

  const sortedData = [
    translatedData.find((item) => item.kind === "Intensité"),
    translatedData.find((item) => item.kind === "Vitesse"),
    translatedData.find((item) => item.kind === "Force"),
    translatedData.find((item) => item.kind === "Endurance"),
    translatedData.find((item) => item.kind === "Énergie"),
    translatedData.find((item) => item.kind === "Cardio"),
  ];

  const renderCustomizedTick = ({ x, y, payload }) => {
    const newY = payload.value === "Endurance" ? y + 10 : y;

    let textAnchor;
    switch (payload.value) {
      case "Intensité":
      case "Endurance":
        textAnchor = "middle";
        break;
      case "Vitesse":
      case "Force":
        textAnchor = "start";
        break;
      case "Cardio":
      case "Énergie":
        textAnchor = "end";
        break;
      default:
        textAnchor = "middle";
    }

    return (
      <text x={x} y={newY} textAnchor={textAnchor} fill="#fff">
        <tspan x={x} dy="0em">
          {payload.value}
        </tspan>
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={sortedData} style={{ padding: 5 }}>
        <PolarGrid fillOpacity={0.7} strokeWidth={2} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={renderCustomizedTick}
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

export default SimpleRadarChart;

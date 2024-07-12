import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { translateEnglishToFrench } from "../../utils/dataModelingTools";

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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={translatedData}>
        <PolarGrid fillOpacity={0.7} strokeWidth={2} radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} />
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

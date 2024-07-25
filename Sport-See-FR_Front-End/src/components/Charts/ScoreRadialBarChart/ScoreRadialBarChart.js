import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { convertToPercent } from "../../../utils/dataModelingTools";
import "./ScoreRadialBarChart.scss";

/**
 * ScoreRadialBarChart component recharts
 * @param {object} userInfos - Object containing user data including today's score.
 * @example data: id: 18, keyData: {calorieCount: 2500,...}, score: 0.3, userInfos: {firstName: 'Cecilia',...}
 * @returns {JSX.Element} A component that displays a circle (RadialBarChart) showing the percentage goal achievement with a title.
 */
const ScoreRadialBarChart = ({ userInfos }) => {
  const data = [
    {
      id: 1,
      todayScore: (userInfos.data.score ?? userInfos.data.todayScore) * 100,
      fill: "#E60000",
    },
    { id: 2, todayScore: 100, opacity: 0 },
  ];

  const renderLegend = () => {
    return (
      <div className="containerScore">
        <p className="resultScore">
          {convertToPercent(userInfos.data.score ?? userInfos.data.todayScore)}
        </p>
        <span className="descriptionScore">
          de votre <br /> objectif
        </span>
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="titleRadialBarChart">Score</p>
      <RadialBarChart
        innerRadius={70}
        outerRadius={90}
        data={data}
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

import { useEffect, useState } from "react";

import apiService from "../../services/apiService";

import { converToKCal } from "../../utils/dataModelingTools";

import ActivityBarChart from "../../components/Charts/ActivityBarChart/ActivityBarChart";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import MacronutrientCard from "../../components/MacronutrientCard/MacronutrientCard";
import MeasurementCard from "../../components/MeasurementCard/MeasurementCard";
import Navbar from "./../../components/Navbar/Navbar";
import Sidebar from "./../../components/Sidebar/Sidebar";
import SimpleRadarChart from "./../../components/Charts/SimpleRadarChart/SimpleRadarChart";
import TinyLineChart from "./../../components/Charts/TinyLineChart/TinyLineChart";
import ScoreRadialBarChart from "../../components/Charts/ScoreRadialBarChart/ScoreRadialBarChart";

import emoji from "../../assets/emoji/emoji.png";
import iconApple from "../../assets/images/MacronutrientIcons/apple.png";
import iconCheeseburger from "../../assets/images/MacronutrientIcons/cheeseburger.png";
import iconChicken from "../../assets/images/MacronutrientIcons/chicken.png";
import iconEnergy from "../../assets/images/MacronutrientIcons/energy.png";

import "./Home.scss";

function Home() {
  const userId = 18;

  const [userInfos, setUserInfos] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  const fetchUserInformations = () => {
    apiService.getUserInformations(userId).then((userInfos) => {
      setUserInfos(userInfos);
    });
  };

  const fetchUserActivityInformations = () => {
    apiService.getUserActivityInformations(userId).then((activity) => {
      setActivity(activity);
    });
  };

  const fetchUserAverageSessions = () => {
    apiService.getUserAverageSessions(userId).then((averageSessions) => {
      setAverageSessions(averageSessions);
    });
  };

  const fetchUserPerformance = () => {
    apiService.getUserPerformance(userId).then((performance) => {
      setPerformance(performance);
    });
  };

  useEffect(() => {
    fetchUserInformations();
    fetchUserActivityInformations();
    fetchUserAverageSessions();
    fetchUserPerformance();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="daily-container">
          {userInfos ? (
            <>
              <h1 className="title-container-home">
                Bonjour
                <span className="name-container-home">
                  {userInfos.data.userInfos.firstName}
                </span>
              </h1>
              <p className="presentation-container-home">
                Félicitation! Vous avez explosé vos objectifs hier
                <img
                  className="emoji"
                  src={emoji}
                  alt="emoji applaudissement"
                />
              </p>
              <div className="section-container">
                <div className="content-container-left">
                  {activity && (
                    <DailyActivityChart
                      chart={<ActivityBarChart activity={activity} />}
                    />
                  )}
                  <div className="measurement-card-container">
                    {averageSessions && (
                      <MeasurementCard
                        chart={
                          <TinyLineChart averageSessions={averageSessions} />
                        }
                      />
                    )}
                    {performance && (
                      <MeasurementCard
                        chart={<SimpleRadarChart performance={performance} />}
                      />
                    )}
                    <MeasurementCard
                      chart={<ScoreRadialBarChart userInfos={userInfos} />}
                    />
                  </div>
                </div>
                <div className="content-container-right" key={userInfos.id}>
                  <MacronutrientCard
                    data={
                      converToKCal(userInfos.data.keyData.calorieCount) + "kCal"
                    }
                    image={iconEnergy}
                    icon={"icon-energy"}
                    name="Calories"
                  />
                  <MacronutrientCard
                    data={userInfos.data.keyData.proteinCount + "g"}
                    image={iconChicken}
                    icon={"icon-chicken"}
                    name="Proteines"
                  />
                  <MacronutrientCard
                    data={userInfos.data.keyData.carbohydrateCount + "g"}
                    image={iconApple}
                    icon={"icon-apple"}
                    name="Glucides"
                  />
                  <MacronutrientCard
                    data={userInfos.data.keyData.lipidCount + "g"}
                    image={iconCheeseburger}
                    icon={"icon-cheesburger"}
                    name="Lipides"
                  />
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;

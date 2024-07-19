import { useEffect, useState } from "react";

import apiService from "../../services/apiService";

import { convertToKCal } from "../../utils/dataModelingTools";

import ActivityBarChart from "../../components/Charts/ActivityBarChart/ActivityBarChart";
import ScoreRadialBarChart from "../../components/Charts/ScoreRadialBarChart/ScoreRadialBarChart";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import MacronutrientCard from "../../components/MacronutrientCard/MacronutrientCard";
import MeasurementCard from "../../components/MeasurementCard/MeasurementCard";
import SimpleRadarChart from "../../components/Charts/SimpleRadarChart/SimpleRadarChart";
import TinyLineChart from "../../components/Charts/TinyLineChart/TinyLineChart";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

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

  const [error, setError] = useState({ message: null, type: null });

  const fetchUserInformations = () => {
    setError({ message: null, type: null }); // Réinitialiser l'erreur avant le fetch
    apiService
      .getUserInformations(userId)
      .then((userInfos) => {
        setUserInfos(userInfos);
      })
      .catch((error) => {
        console.error("Failed to fetch user informations:", error);
        setError({
          message: "Unable to fetch user information. Please try again later.",
          type: "userInfos",
        });
      });
  };

  const fetchUserActivityInformations = () => {
    apiService
      .getUserActivityInformations(userId)
      .then((activity) => {
        setActivity(activity);
      })
      .catch((error) => {
        console.error("Failed to fetch user activity informations:", error);
        setError({
          message:
            "Unable to fetch user activity information. Please try again later.",
          type: "activity",
        });
      });
  };

  const fetchUserAverageSessions = () => {
    apiService
      .getUserAverageSessions(userId)
      .then((averageSessions) => {
        setAverageSessions(averageSessions);
      })
      .catch((error) => {
        console.error("Failed to fetch user average sessions:", error);
        setError({
          message:
            "Unable to fetch user average sessions. Please try again later.",
          type: "averageSessions",
        });
      });
  };

  const fetchUserPerformance = () => {
    apiService
      .getUserPerformance(userId)
      .then((performance) => {
        setPerformance(performance);
      })
      .catch((error) => {
        console.error("Failed to fetch user performance:", error);
        setError({
          message: "Unable to fetch user performance. Please try again later.",
          type: "performance",
        });
      });
  };

  useEffect(() => {
    fetchUserInformations();
    fetchUserActivityInformations();
    fetchUserAverageSessions();
    fetchUserPerformance();
  }, []);

  return (
    <>
      {error.type === "userInfos" ? (
        <div className="error">{error.message}</div>
      ) : (
        <section>
          <div className="container">
            <Navbar />
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
                      {error.type === "activity" ? (
                        <div className="error">{error.message}</div>
                      ) : activity ? (
                        <DailyActivityChart
                          chart={<ActivityBarChart activity={activity} />}
                        />
                      ) : (
                        <div>Loading activity...</div>
                      )}
                      <div className="measurement-card-container">
                        {error.type === "averageSessions" ? (
                          <div className="error">{error.message}</div>
                        ) : averageSessions ? (
                          <MeasurementCard
                            chart={
                              <TinyLineChart
                                averageSessions={averageSessions}
                              />
                            }
                          />
                        ) : (
                          <div>Loading average sessions...</div>
                        )}
                        {error.type === "performance" ? (
                          <div className="error">{error.message}</div>
                        ) : performance ? (
                          <MeasurementCard
                            chart={
                              <SimpleRadarChart performance={performance} />
                            }
                          />
                        ) : (
                          <div>Loading performance...</div>
                        )}
                        <MeasurementCard
                          chart={<ScoreRadialBarChart userInfos={userInfos} />}
                        />
                      </div>
                    </div>
                    <div className="content-container-right" key={userInfos.id}>
                      <MacronutrientCard
                        data={
                          convertToKCal(userInfos.data.keyData.calorieCount) +
                          "kCal"
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
      )}
    </>
  );
}

export default Home;

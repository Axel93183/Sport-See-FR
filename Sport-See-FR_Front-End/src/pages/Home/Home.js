import { useEffect, useState } from "react";

import {
  activityBarChartConfig,
  performanceRadarChartConfig,
  scoreRadialBarChartConfig,
} from "../../utils/chartsConfig";
import {
  convertToKCal,
  transformActivityData,
} from "../../utils/dataModelingTools";

import apiService from "../../services/apiService";

import ActivityBarChart from "../../components/Charts/ActivityBarChart/ActivityBarChart";
import PerformanceRadarChart from "../../components/Charts/PerformanceRadarChart/PerformanceRadarChart";
import ScoreRadialBarChart from "../../components/Charts/ScoreRadialBarChart/ScoreRadialBarChart";
import TinyLineChart from "../../components/Charts/TinyLineChart/TinyLineChart";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import Loader from "../../components/Loader/Loader";
import MacronutrientCard from "../../components/MacronutrientCard/MacronutrientCard";
import MeasurementCard from "../../components/MeasurementCard/MeasurementCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import emoji from "../../assets/emoji/emoji.png";
import iconApple from "../../assets/images/MacronutrientIcons/apple.png";
import iconCheeseburger from "../../assets/images/MacronutrientIcons/cheeseburger.png";
import iconChicken from "../../assets/images/MacronutrientIcons/chicken.png";
import iconEnergy from "../../assets/images/MacronutrientIcons/energy.png";

import "./Home.scss";

/**
 * Home component fetches and displays user information, activity, average sessions, and performance data.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
function Home() {
  const userId = 18;

  const [userInfos, setUserInfos] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  const [errors, setErrors] = useState({
    userInfos: null,
    activity: null,
    averageSessions: null,
    performance: null,
  });

  /**
   * Fetches user information, formats the data for the score radial bar chart, and updates the state.
   * Handles errors by logging them and updating the error state.
   * @function fetchUserInformations
   * @returns {void}
   */
  const fetchUserInformations = () => {
    setTimeout(() => {
      apiService
        .getUserInformations(userId)
        .then((data) => {
          const formattedData = scoreRadialBarChartConfig(data);
          setUserInfos({ ...data, formattedData });
        })
        .catch((error) => {
          console.error("Failed to fetch user information:", error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            userInfos:
              "Impossible de récupérer les informations de l'utilisateur. Veuillez réessayer plus tard.",
          }));
        });
    }, 1000);
  };

  /**
   * Fetches user activity information and updates the state with transformed data.
   * Handles errors by logging them and updating the error state.
   * @function fetchUserActivityInformations
   * @returns {void}
   */
  const fetchUserActivityInformations = () => {
    apiService
      .getUserActivityInformations(userId)
      .then((data) => {
        const transformedData = transformActivityData(data.data.sessions);
        setActivity({
          ...data,
          data: { ...data.data, sessions: transformedData },
        });
      })
      .catch((error) => {
        console.error("Failed to fetch user activity information:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          activity:
            "Impossible de récupérer les informations sur l'activité de l'utilisateur. Veuillez réessayer plus tard.",
        }));
      });
  };

  /**
   * Fetches user average sessions from the API.
   */
  const fetchUserAverageSessions = () => {
    setTimeout(() => {
      apiService
        .getUserAverageSessions(userId)
        .then((data) => {
          setAverageSessions(data);
        })
        .catch((error) => {
          console.error("Failed to fetch user average sessions:", error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            averageSessions:
              "Impossible de récupérer les sessions moyennes de l'utilisateur. Veuillez réessayer plus tard.",
          }));
        });
    }, 2000);
  };

  /**
   * Fetches user performance data, prepares the data for the radar chart, and updates the state.
   * Handles errors by logging them and updating the error state.
   * @function fetchUserPerformance
   * @returns {void}
   */
  const fetchUserPerformance = () => {
    setTimeout(() => {
      apiService
        .getUserPerformance(userId)
        .then((data) => {
          const sortedData = performanceRadarChartConfig(data);
          setPerformance({ ...data, sortedData });
        })
        .catch((error) => {
          console.error("Failed to fetch user performance:", error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            performance:
              "Impossible de récupérer les performances de l'utilisateur. Veuillez réessayer plus tard.",
          }));
        });
    }, 2000);
  };

  /**
   * useEffect hook to fetch all user data on component mount.
   */
  useEffect(() => {
    fetchUserInformations();
    fetchUserActivityInformations();
    fetchUserAverageSessions();
    fetchUserPerformance();
  }, [userId]);

  return (
    <>
      <section>
        <div className="container">
          <Navbar />
          <Sidebar />
          {!userInfos && !errors.userInfos ? (
            <Loader image={iconEnergy} icon={"icon-energy"} />
          ) : errors.userInfos ? (
            <div className="errors-userInfos">{errors.userInfos}</div>
          ) : (
            <div className="daily-container">
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
                  {/* Section Activity */}
                  {!activity && !errors.activity ? (
                    <div className="charts-loader-wrapper">
                      <Loader small image={iconEnergy} icon={"icon-energy"} />
                    </div>
                  ) : errors.activity ? (
                    <div className="errors">{errors.activity}</div>
                  ) : (
                    <DailyActivityChart
                      chart={
                        <ActivityBarChart
                          data={activity.data.sessions}
                          config={activityBarChartConfig}
                        />
                      }
                    />
                  )}
                  <div className="measurement-card-container">
                    {/* Average Sessions */}
                    {!averageSessions && !errors.averageSessions ? (
                      <div className="charts-loader-wrapper">
                        <Loader small image={iconEnergy} icon={"icon-energy"} />
                      </div>
                    ) : errors.averageSessions ? (
                      <div className="errors">{errors.averageSessions}</div>
                    ) : (
                      <MeasurementCard
                        chart={
                          <TinyLineChart averageSessions={averageSessions} />
                        }
                      />
                    )}

                    {/* Performance */}
                    {!performance && !errors.performance ? (
                      <div className="charts-loader-wrapper">
                        <Loader small image={iconEnergy} icon={"icon-energy"} />
                      </div>
                    ) : errors.performance ? (
                      <div className="errors">{errors.performance}</div>
                    ) : (
                      <MeasurementCard
                        chart={
                          <PerformanceRadarChart
                            data={performance.sortedData}
                          />
                        }
                      />
                    )}

                    {/* Score Radial Bar Chart */}
                    <MeasurementCard
                      chart={
                        <ScoreRadialBarChart
                          formattedData={userInfos.formattedData}
                          data={userInfos}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="content-container-right" key={userInfos?.id}>
                  <MacronutrientCard
                    data={
                      userInfos
                        ? convertToKCal(userInfos.data.keyData.calorieCount) +
                          "kCal"
                        : "Loading..."
                    }
                    image={iconEnergy}
                    icon={"icon-energy"}
                    name="Calories"
                  />
                  <MacronutrientCard
                    data={
                      userInfos
                        ? userInfos.data.keyData.proteinCount + "g"
                        : "Loading..."
                    }
                    image={iconChicken}
                    icon={"icon-chicken"}
                    name="Proteines"
                  />
                  <MacronutrientCard
                    data={
                      userInfos
                        ? userInfos.data.keyData.carbohydrateCount + "g"
                        : "Loading..."
                    }
                    image={iconApple}
                    icon={"icon-apple"}
                    name="Glucides"
                  />
                  <MacronutrientCard
                    data={
                      userInfos
                        ? userInfos.data.keyData.lipidCount + "g"
                        : "Loading..."
                    }
                    image={iconCheeseburger}
                    icon={"icon-cheesburger"}
                    name="Lipides"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;

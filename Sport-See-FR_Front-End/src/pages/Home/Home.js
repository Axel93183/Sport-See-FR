import { useEffect, useState } from "react";
import emoji from "../../assets/emoji/emoji.png";
import mockActivity from "../../utils/mockActivity";
import mockAverageSessions from "../../utils/mockAverageSessions";
import mockPerformance from "../../utils/mockPerformance";
import mockUserInfos from "../../utils/mockUserInfos";
import Navbar from "./../../components/Navbar/Navbar";
import Sidebar from "./../../components/Sidebar/Sidebar";

import "./Home.scss";

function Home() {
  const [userInfos, setUserInfos] = useState(null);

  const userId = 18;

  const fetchUserInformations = () => {
    const userInfos = mockUserInfos.find((user) => user.id === userId);
    console.log("User Informations:", userInfos);
    setUserInfos(userInfos);
  };

  const fetchUserActivityInformations = () => {
    const activity = mockActivity.find(
      (activity) => activity.userId === userId
    );
    console.log("User Activity Informations:", activity);
  };

  const fetchUserAverageSessions = () => {
    const averageSessions = mockAverageSessions.find(
      (session) => session.userId === userId
    );
    console.log("User Average Sessions:", averageSessions);
  };

  const fetchUserPerformance = () => {
    const performance = mockPerformance.find(
      (performance) => performance.userId === userId
    );
    console.log("User Performance:", performance);
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
                  {userInfos.userInfos.firstName}
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

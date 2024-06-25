import { useEffect, useState } from "react";

import apiService from "../../services/apiService";

import emoji from "../../assets/emoji/emoji.png";
import Navbar from "./../../components/Navbar/Navbar";
import Sidebar from "./../../components/Sidebar/Sidebar";

import "./Home.scss";

function Home() {
  const userId = 18;

  const [userInfos, setUserInfos] = useState(null);

  const fetchUserInformations = () => {
    apiService.getUserInformations(userId).then((userInfos) => {
      setUserInfos(userInfos);
      console.log("User Informations:", userInfos);
    });
  };

  const fetchUserActivityInformations = () => {
    apiService.getUserActivityInformations(userId).then((activity) => {
      console.log("User Activity Informations:", activity);
    });
  };

  const fetchUserAverageSessions = () => {
    apiService.getUserAverageSessions(userId).then((averageSessions) => {
      console.log("User Average Sessions:", averageSessions);
    });
  };

  const fetchUserPerformance = () => {
    apiService.getUserPerformance(userId).then((performance) => {
      console.log("User Performance:", performance);
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

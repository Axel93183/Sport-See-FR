import { useEffect } from "react";
import mockActivity from "../../utils/mockActivity";
import mockAverageSessions from "../../utils/mockAverageSessions";
import mockPerformance from "../../utils/mockPerformance";
import mockUserInfos from "../../utils/mockUserInfos";
import Navbar from "./../../components/Navbar/Navbar";
import Sidebar from "./../../components/Sidebar/Sidebar";

import "./Home.scss";

function Home() {
  const fetchUserInformations = () => {
    const userInfos = mockUserInfos.find((user) => user.id === 18);
    console.log("User Informations:", userInfos);
  };

  const fetchUserActivityInformations = () => {
    const activity = mockActivity.find((activity) => activity.userId === 18);
    console.log("User Activity Informations:", activity);
  };

  const fetchUserAverageSessions = () => {
    const averageSessions = mockAverageSessions.find(
      (session) => session.userId === 18
    );
    console.log("User Average Sessions:", averageSessions);
  };

  const fetchUserPerformance = () => {
    const performance = mockPerformance.find(
      (performance) => performance.userId === 18
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
      </div>
    </section>
  );
}

export default Home;

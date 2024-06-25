import mockActivity from "../utils/mockActivity";
import mockAverageSessions from "../utils/mockAverageSessions";
import mockPerformance from "../utils/mockPerformance";
import mockUserInfos from "../utils/mockUserInfos";

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
function getUserInformations(id) {
  return Promise.resolve(mockUserInfos.find((user) => user.id === id));
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
function getUserActivityInformations(id) {
  return Promise.resolve(
    mockActivity.find((activity) => activity.userId === id)
  );
}

/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
function getUserAverageSessions(id) {
  return Promise.resolve(
    mockAverageSessions.find((session) => session.userId === id)
  );
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
function getUserPerformance(id) {
  return Promise.resolve(
    mockPerformance.find((performance) => performance.userId === id)
  );
}

const Api = {
  getUserInformations,
  getUserAverageSessions,
  getUserActivityInformations,
  getUserPerformance,
};

export default Api;

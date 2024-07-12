import mockActivity from "../utils/mockActivity";
import mockAverageSessions from "../utils/mockAverageSessions";
import mockPerformance from "../utils/mockPerformance";
import mockUserInfos from "../utils/mockUserInfos";

const BASE_URL = "http://localhost:3001";
const isMock = true;

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
function getUserInformations(id) {
  if (isMock === true) {
    return Promise.resolve(mockUserInfos.find((user) => user.id === id));
  } else {
    return fetch(`${BASE_URL}/user/${id}`).then((response) => response.json());
  }
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
function getUserActivityInformations(id) {
  if (isMock === true) {
    return Promise.resolve(
      mockActivity.find((activity) => activity.data.userId === id)
    );
  } else {
    return fetch(`${BASE_URL}/user/${id}/activity`).then((response) =>
      response.json()
    );
  }
}

/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
function getUserAverageSessions(id) {
  if (isMock === true) {
    return Promise.resolve(
      mockAverageSessions.find((session) => session.data.userId === id)
    );
  } else {
    return fetch(`${BASE_URL}/user/${id}/average-sessions`).then((response) =>
      response.json()
    );
  }
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
function getUserPerformance(id) {
  if (isMock === true) {
    return Promise.resolve(
      mockPerformance.find((performance) => performance.data.userId === id)
    );
  } else {
    return fetch(`${BASE_URL}/user/${id}/performance`).then((response) =>
      response.json()
    );
  }
}

const apiService = {
  getUserInformations,
  getUserAverageSessions,
  getUserActivityInformations,
  getUserPerformance,
};

export default apiService;

import mockActivity from "../utils/mockActivity";
import mockAverageSessions from "../utils/mockAverageSessions";
import mockPerformance from "../utils/mockPerformance";
import mockUserInfos from "../utils/mockUserInfos";

const BASE_URL = "http://localhost:3001";
const isMock = false;

/**
 * Retrieve user information based on user ID.
 *
 * This function either fetches real user data from an API or returns mock data based on the `isMock` flag.
 *
 * @param {number} id - The unique identifier of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user information.
 * @throws {Error} - Throws an error if the fetch operation fails or if the ID is not found in mock data.
 */
function getUserInformations(id) {
  if (isMock === true) {
    return Promise.resolve(mockUserInfos.find((user) => user.id === id));
  } else {
    return fetch(`${BASE_URL}/user/${id}`).then((response) => response.json());
  }
}

/**
 * Retrieve user activity information based on user ID.
 *
 * This function either fetches real user activity data from an API or returns mock data based on the `isMock` flag.
 *
 * @param {number} id - The unique identifier of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user activity information.
 * @throws {Error} - Throws an error if the fetch operation fails or if the ID is not found in mock data.
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
 * Retrieve user average sessions based on user ID.
 *
 * This function either fetches real user average session data from an API or returns mock data based on the `isMock` flag.
 *
 * @param {number} id - The unique identifier of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user average sessions data.
 * @throws {Error} - Throws an error if the fetch operation fails or if the ID is not found in mock data.
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
 * Retrieve user performance data based on user ID.
 *
 * This function either fetches real user performance data from an API or returns mock data based on the `isMock` flag.
 *
 * @param {number} id - The unique identifier of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user performance data.
 * @throws {Error} - Throws an error if the fetch operation fails or if the ID is not found in mock data.
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

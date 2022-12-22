import sendRequest from "./send-request";
const BASE_URL = '/api/scores';

export function addProfileScore(score) {
  return sendRequest(`${BASE_URL}/add-score`, 'POST', score)
}
export function getHighScores() {
  return sendRequest(`${BASE_URL}/high-scores`)
}
export function getUserScores() {
  return sendRequest(`${BASE_URL}/user-high-scores`)
}
export function deleteScores() {
  return sendRequest(`${BASE_URL}/delete-scores`, 'DELETE')
}




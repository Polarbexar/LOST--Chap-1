import sendRequest from "./send-request";
const BASE_URL = '/api/scores';

export default function addProfileScore(score) {
  return sendRequest(`${BASE_URL}/add-score`, 'POST', score)
}


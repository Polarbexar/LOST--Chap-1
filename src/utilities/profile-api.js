import sendRequest from "./send-request";
const BASE_URL = '/api/profile';

export default function getUserProfile() {
  return sendRequest(`${BASE_URL}/info`)
}
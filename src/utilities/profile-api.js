import sendRequest from "./send-request";
const BASE_URL = '/api/profile';

export function getUserProfile() {
  return sendRequest(`${BASE_URL}/info`)
}
export function updateProfileInfo(data) {
  return sendRequest(`${BASE_URL}/update`, 'PUT', data)
}
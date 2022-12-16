import sendRequest from "./send-request"
const BASE_URL = '/api/users';

export async function signUp(userData) {
 return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(creds) {
  return sendRequest(`${BASE_URL}/login`, 'POST', creds);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}

export async function addProfileInfo(data) {
  return sendRequest(`${BASE_URL}/profile-info`, 'POST', data);
}
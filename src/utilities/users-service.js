//Service modules export business/app logic
// such as managing tokens, etc.
// Service modules depend on API modules
//for making ajax requests to the server

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  //return user object from token
  return getUser();
}

export async function login(creds) {
  const token = await usersAPI.login(creds)
  localStorage.setItem('token', token)
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  //getItem will return null if jkey does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // a JWT expiration(exp) is expresssed in seconds, not ms.
  if (payload.exp * 1000 < Date.now()) {
    //Token has expired
    localStorage.removeItem('token');
    return null;
  } 
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  //We cant forget how to use .then with promises
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}


import axios from 'axios';

const API = process.env.REACT_APP_API;

function serverLogin(user) {
  return axios.post(`${API}login`, user);
}

function registerUser(userData) {
  return axios.post(`${API}register`, userData);
}

function postSignature(token, signatureInfo) {
  return token + signatureInfo;
}

export { serverLogin, registerUser, postSignature };

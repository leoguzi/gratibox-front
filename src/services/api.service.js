import axios from 'axios';

const API = process.env.REACT_APP_API;

function authConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function serverLogin(user) {
  return axios.post(`${API}login`, user);
}

function registerUser(userData) {
  return axios.post(`${API}register`, userData);
}

function registerSignature(token, signatureInfo) {
  console.log(signatureInfo);
  return axios.post(`${API}signature`, signatureInfo, authConfig(token));
}

export { serverLogin, registerUser, registerSignature };

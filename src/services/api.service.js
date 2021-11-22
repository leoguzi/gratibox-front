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

function getSignature(token) {
  return axios.get(`${API}signature`, authConfig(token));
}

function registerUser(userData) {
  return axios.post(`${API}register`, userData);
}

function registerSignature(token, signatureInfo) {
  return axios.post(`${API}signature`, signatureInfo, authConfig(token));
}

export { serverLogin, registerUser, getSignature, registerSignature };

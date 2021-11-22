import axios from 'axios';

const API = process.env.REACT_APP_API;

function serverLogin(user) {
  return axios.post(`${API}login`, user);
}

function postSignature(token, signatureInfo) {
  return token + signatureInfo;
}

export { serverLogin, postSignature };

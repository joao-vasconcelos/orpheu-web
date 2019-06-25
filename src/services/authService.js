import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiURL } from "../config/settings.json";

const apiEndpoint = apiURL + "/auth";

function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

function logout() {
  localStorage.removeItem("x-auth-token");
  localStorage.removeItem("user-name");
}

async function saveAuthToken(jwt) {
  try {
    // Store JWT in Local Storage
    localStorage.setItem("x-auth-token", jwt);
    // Decode JWT and store user.name in Local Storage
    const user = jwtDecode(jwt);
    const firstName = user.name.replace(/ .*/, "");
    localStorage.setItem("user-name", firstName);
  } catch (err) {
    console.log(err);
    return err;
  }
}

function getUserName() {
  return localStorage.getItem("user-name");
}

function userIsLoggedIn() {
  if (getUserName()) return true;
  else return false;
}

function userIsAdmin() {
  const role = localStorage.getItem("user-role");
  if (role === "admin") return true;
  else return false;
}

export default {
  login,
  logout,
  userIsLoggedIn,
  userIsAdmin,
  saveAuthToken,
  getUserName
};

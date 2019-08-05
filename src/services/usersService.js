import http from "./httpService";
import { apiURL } from "../config/settings.json";

const apiEndpoint = apiURL + "users";

async function createNew(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name
  });
}

export default {
  createNew
};

import http from "../services/httpService";
import { apiURL } from "../config/settings.json";

const apiEndpoint = apiURL + "/books";

function get() {
  return http.get(apiEndpoint);
}

function getByID(id) {
  return http.get(apiEndpoint + "/" + id);
}

function filter(key, value) {
  return http.get(apiEndpoint + "/filter/" + key + "/" + value);
}

function create(item) {
  return http.post(apiEndpoint + "/", item);
}

export default {
  get,
  getByID,
  filter,
  create
};

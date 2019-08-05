import http from "../services/httpService";
import { apiURL } from "../config/settings.json";

const apiEndpoint = apiURL + "authors";

function get() {
  return http.get(apiEndpoint);
}

function getByID(id) {
  return http.get(apiEndpoint + "/" + id);
}

function post(item) {
  return http.post(apiEndpoint + "/", item);
}

function put(id, item) {
  return http.put(apiEndpoint + "/" + id, item);
}

function deleteByID(id) {
  return http.delete(apiEndpoint + "/" + id);
}

export default {
  get,
  getByID,
  post,
  put,
  deleteByID
};

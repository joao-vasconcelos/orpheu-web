import http from "../services/httpService";

const apiEndpoint = "books";

function get() {
  return http.get(apiEndpoint);
}

function getByID(id) {
  return http.get(apiEndpoint + "/" + id);
}

function post(data) {
  return http.post(apiEndpoint + "/", data);
}

function put(id, data) {
  return http.put(apiEndpoint + "/" + id, data);
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

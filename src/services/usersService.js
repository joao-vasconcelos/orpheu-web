import http from "./httpService";

const apiEndpoint = "users";

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

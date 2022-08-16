const baseUrl = "https://api.chucknorris.io/";
const axios = require("axios");

class Random {
  async get(route) {
    const response = await axios.get(baseUrl + route);

    return response;
  }

  async post(body, token = false) {
    if (!token) {
      response = await axios.post(baseUrl + route, body);
    } else {
      response = await axios.post(baseUrl + route, body, token);
    }
    const response = await axios.post(baseUrl + route, body, token);

    return response;
  }
}
module.exports = new Random();

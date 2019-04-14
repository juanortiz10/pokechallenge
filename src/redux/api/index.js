const axios = require("axios");

export const getCall = (url, params) => axios.get(url, params);

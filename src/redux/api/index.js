const axios = require("axios");

// @flow
export const getCall = (url, params) => axios.get(url, params);

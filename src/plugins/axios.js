"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


let config = {
  baseURL: 'https://data.goranee.ir/',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    authorization: ""
  }
};

const _axios = axios.create(config);

let token = null;

function getToken() {
  return axios.get('https://data.goranee.ir/user/loginAnonymous').then((res) => {
    token = res.data.token;
  })
}

_axios.interceptors.request.use(
  async function (config) {
    
    if (token === null)
      await getToken()

    config.headers['authorization'] = token
    // Do something before request is sent
    return config;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios
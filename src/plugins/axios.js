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
    authorization: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmExYzUxNjZkMmE4N2Q4ZGQxMTI1MyIsInBlcm1pc3Npb24iOnsiaXNBbm9ueW1vdXMiOnRydWUsImlzRGVmYXVsdCI6ZmFsc2UsImdvZF9hY2Nlc3MiOmZhbHNlLCJ1c2VyX2FjY2VzcyI6ZmFsc2UsInVwbG9hZF9maWxlX2FjY2VzcyI6ZmFsc2UsInJlbW92ZV9maWxlX2FjY2VzcyI6ZmFsc2UsImFub255bW91c19hY2Nlc3MiOnRydWUsIl9pZCI6IjYxYmExYzUwNjZkMmE4N2Q4ZGQxMTI1MCIsInRpdGxlIjoiYW5vbnltb3VzIiwiX192IjowfSwicGhvbmUiOiIiLCJlbWFpbCI6IiIsInR5cGUiOiJhbm9ueW1vdXMiLCJpYXQiOjE2NTY0MzA0NDF9.jr1auFS5J9CfSv9xCnakG5CMOMf8DgRznRvuWyX1JDg2xFrX11LetquEQqxT32_wh7ma7lB9cd5rmfIaLzba0vXblUSZkNR1PA8AVpMxgY2tGYy1IhdjOt2NNn4GCm-UcGNFch0M5iGQls323bNp81wv16nD8huJyOXcH2xMRyW5ZehYQT7Vc3KCw03_T6pBe6ZnaY-4GLPMqqiShTJrjZ01ADxU0BQTrnwPyE83VZ3xszhHlkKxTRPjLKutcKAvavlgov6r9j4pxzyWVBUdShoNQEU_KIoiGllPPGgn8BR6gBxaeznaJ_-BwATy6lRfdguwMs1akkHhXGIezfJ3KQ"
}
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
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

import axios from "axios";
const instance = axios.create({
  baseURL: "https://65b74f5446324d531d543d91.mockapi.io/api/v1/user/" // base URL

});

instance.interceptors.request.use(
  function (config) {
    
    // const token = localStorage.getItem("access-token");
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;

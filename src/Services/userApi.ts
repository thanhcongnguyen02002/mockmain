import axios from "axios";
import instance from "./axiosClient";
const addUsers = (payload: {
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  cccd: number;
  address: string;
  phonenumer: number;
  bankingnumber: number;
  username: string;
  password: string;
}) => {
  return axios.post("http://localhost:8888/api/v1/auth/register", payload);
};
const login = (username: string, password: string) => {
  return instance.post("auth/login-v2", { username, password });
};
export { addUsers, login };

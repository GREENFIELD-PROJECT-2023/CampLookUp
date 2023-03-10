import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000";

const getPublicContent = () => {
  return axios.get(API_URL + "/sites");
};

const getUserBoard = () => {
  return axios.get(API_URL + "/user", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "/admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};

export default UserService;
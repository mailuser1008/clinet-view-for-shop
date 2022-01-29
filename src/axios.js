import axios from "axios";
const baseURL = "http://192.168.13.48:3000/";
const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((request) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    request.headers.common["Authorization"] = `Bearer ${access_token}`;
  }
  return request;
});

export default api;

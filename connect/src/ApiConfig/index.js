import axios from "axios";

const api = axios.create({
  baseURL: "https://connect-a45c.onrender.com",
  // baseURL: "http://localhost:8000""",
});

export default api;

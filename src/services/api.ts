import axios from "axios";
const url = "http://localhost:9000";
// const url = process.env.API_URL;
 const api = axios.create({
  baseURL: url,
});

export default api;

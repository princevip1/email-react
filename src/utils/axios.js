import axios from "axios";

const Fetch = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

Fetch.interceptors.request.use(async (req) => {
  const access_token = localStorage.getItem("authToken");
  req.headers.Authorization = `Bearer ${access_token}`;
  return req;
});

export default Fetch;

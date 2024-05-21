import axios from "axios";

const BACKEND_URL = "http://localhost:3500/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  ?.currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

export const userRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

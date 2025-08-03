import axios from "axios";
import { isGetValue } from "../hooks/isGetValue";
import { isTokenExpired } from "../../common/token";
import { refreshTokenAuth } from "./user";

const Auth = isGetValue();
const instances = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const URL_SERVER_RENDER = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instances.interceptors.request.use(
  async (config) => {
    if (Auth && Auth.token) {
      if (isTokenExpired(Auth.token)) {
        const refreshToken = Auth.refreshToken;
        if (isTokenExpired(refreshToken)) {
          localStorage.clear();
          window.location.href = "/login";
          return Promise.reject("Token expired");
        }

        const { data } = await refreshTokenAuth({ refreshToken });
        localStorage.setItem("token", JSON.stringify(data));
        config.headers["Authorization"] = `Bearer ${data.token}`;
      } else {
        config.headers["Authorization"] = `Bearer ${Auth.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instances.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instances;

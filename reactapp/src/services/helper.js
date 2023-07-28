import axios from "axios";
import { getToken } from "../auth";
import Swal from "sweetalert2";

export const BASE_URL = "https://8080-dffeeddcbeacbeceabaeaeaadbdbabf.project.examly.io/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {

    const token = getToken();


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // console.log(config);
    }

    return config;
  },
  (error) => Promise.reject(error)
);



privateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      await Swal.fire({
        icon: "warning",
        title: "Session Expired",
        text: "Please login to access this page.",
      });

      // Redirect to the login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
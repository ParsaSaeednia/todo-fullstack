import axios from "axios";
import { useGeneralStore } from "@/store/GeneralStore";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const loadingStore = useGeneralStore();
    loadingStore.startLoading();
    return config;
  },
  (error) => {
    const loadingStore = useGeneralStore();
    loadingStore.stopLoading();
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const loadingStore = useGeneralStore();
    loadingStore.stopLoading();
    return response;
  },
  (error) => {
    const loadingStore = useGeneralStore();
    loadingStore.stopLoading();
    return Promise.reject(error);
  }
);

export default api;

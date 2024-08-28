import axios from "axios";

const API_BASE_URL = "https://wp.blackstarfest.org";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

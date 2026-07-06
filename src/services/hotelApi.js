import axios from "axios";

const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

const hotelApi = axios.create({
  baseURL: BASE_URL,
});

export default hotelApi;
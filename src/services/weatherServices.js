import { WEATHER_BASE_API_PATH, WEATHER_API_KEY } from "./constants";
import axios from "axios";

const fetchWeatherServices = (code) =>
  axios
    .get(WEATHER_BASE_API_PATH, {
      params: {
        locationKey: code,
        apikey: WEATHER_API_KEY,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);

export default fetchWeatherServices;

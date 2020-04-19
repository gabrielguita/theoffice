import {
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILURE,
} from "./constants";

export const searchWeather = (payload) => {
  return {
    type: SEARCH_WEATHER,
    payload,
  };
};

export const searchWeatherSuccess = (result) => ({
  type: SEARCH_WEATHER_SUCCESS,
  payload: result,
});
export const searchWeatherFailure = (error) => ({
  type: SEARCH_WEATHER_FAILURE,
  payload: error,
});

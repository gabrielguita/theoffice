import { createSelector } from "reselect";
import get from "lodash/get";

const selectWeather = (state) => state;

const makeSelectWeather = () =>
  createSelector(selectWeather, (substate) => substate);

const makeSelectGetWeather = () =>
  createSelector(selectWeather, (substate) => ({
    isLoading: get(substate, "getWeather.isLoading", null),
    hasError: get(substate, "getWeather.weather.message", null),
    headline: get(substate, "getWeather.weather.Headline.text", null),
    category: get(substate, "getWeather.weather.Headline.Category", null),
    dailyForecasts: get(substate, "getWeather.weather.DailyForecasts", null),
  }));

export { makeSelectWeather, makeSelectGetWeather };

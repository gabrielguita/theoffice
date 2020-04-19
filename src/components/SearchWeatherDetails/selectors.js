import { createSelector } from "reselect";
import get from "lodash/get";

const selectShow = (state) => state;

const makeSelectShow = () => createSelector(selectShow, (substate) => substate);

const makeSelectGetWeather = () =>
  createSelector(selectShow, (substate) => ({
    isLoading: get(substate, "getWeather.isLoading", null),
    hasError: get(substate, "getWeather.weather.message", null),
    headline: get(substate, "getWeather.weather.Headline.text", null),
    category: get(substate, "getWeather.weather.Headline.Category", null),
    dailyForecasts: get(substate, "getWeather.weather.DailyForecasts", null),
  }));

export { makeSelectShow, makeSelectGetWeather };

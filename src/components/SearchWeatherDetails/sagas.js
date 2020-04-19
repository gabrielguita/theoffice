import { put, all, call, takeLatest } from "redux-saga/effects";
import { searchWeatherSuccess, searchWeatherFailure } from "./actions";
import { SEARCH_WEATHER } from "./constants";

import fetchWeatherServices from "../../services/weatherServices";

export function* searchWeather({ payload }) {
  try {
    const apiGetResponse = yield call(fetchWeatherServices, payload.code);
    yield put(searchWeatherSuccess(apiGetResponse));
  } catch (error) {
    yield put(searchWeatherFailure(error));
  }
}

export default function* rootSagas() {
  yield all([takeLatest(SEARCH_WEATHER, searchWeather)]);
}

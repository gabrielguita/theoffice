import { put, all, takeLatest, call } from "redux-saga/effects";
import { searchFlightSuccess, searchFlightFailure } from "./actions";
import { SEARCH_FLIGHT } from "./constants";

import fetchFlightServices from "../../services/searchFlightServices";

export function* searchFlight({ payload }) {
  try {
    const apiGetResponse = yield call(fetchFlightServices, payload);
    yield put(searchFlightSuccess(apiGetResponse));
  } catch (error) {
    yield put(searchFlightFailure(error.message));
  }
}

export default function* rootSagas() {
  yield all([takeLatest(SEARCH_FLIGHT, searchFlight)]);
}

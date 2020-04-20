import { all, takeLatest } from "redux-saga/effects";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { searchFlight } from "./components/SearchFlightDetails/sagas";
import { searchWeather } from "./components/SearchWeatherDetails/sagas";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { logger } from "redux-logger";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

function* rootSaga() {
  yield all([
    takeLatest("SEARCH_FLIGHT", searchFlight),
    takeLatest("SEARCH_WEATHER", searchWeather),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;

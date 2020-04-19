import { all, takeLatest } from "redux-saga/effects";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { searchFlight } from "./components/SearchFlightDetails/sagas";
import { searchWeather } from "./components/SearchWeatherDetails/sagas";
import { logger } from "redux-logger";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function* rootSaga() {
  yield all([
    takeLatest("SEARCH_FLIGHT", searchFlight),
    takeLatest("SEARCH_WEATHER", searchWeather),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;

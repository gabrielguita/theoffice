import { combineReducers } from "redux";
import flightsReducer from "../components/SearchFlightDetails/reducer";
import weatherReducer from "../components/SearchWeatherDetails/reducer";

export default combineReducers({
  getFlights: flightsReducer,
  getWeather: weatherReducer,
});

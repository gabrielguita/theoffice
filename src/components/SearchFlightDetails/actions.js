import {
  SEARCH_FLIGHT,
  SEARCH_FLIGHT_SUCCESS,
  SEARCH_FLIGHT_FAILURE,
} from "./constants";

export const searchFlight = (payload) => ({
  type: SEARCH_FLIGHT,
  payload,
});

export const searchFlightSuccess = (result) => ({
  type: SEARCH_FLIGHT_SUCCESS,
  payload: result,
});

export const searchFlightFailure = (error) => ({
  type: SEARCH_FLIGHT_FAILURE,
  payload: error,
});

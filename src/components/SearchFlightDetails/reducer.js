import {
  SEARCH_FLIGHT,
  SEARCH_FLIGHT_SUCCESS,
  SEARCH_FLIGHT_FAILURE,
} from "./constants";

export const initialState = {
  flights: {},
  error: null,
  isLoading: false,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FLIGHT:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_FLIGHT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        flights: action.payload,
      };
    case SEARCH_FLIGHT_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReducer;

import {
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAILURE,
} from "./constants";

export const initialState = {
  weather: {},
  error: null,
  isLoading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload,
      };
    case SEARCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;

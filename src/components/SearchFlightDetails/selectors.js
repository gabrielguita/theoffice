import { createSelector } from "reselect";
import get from "lodash/get";

const selectFlight = (state) => state;

const makeSelectFlight = () =>
  createSelector(selectFlight, (substate) => substate);

const makeSelectIsLoading = () =>
  createSelector(selectFlight, (substate) =>
    get(substate, "getFlights.isLoading", null),
  );

const makeSelectError = () =>
  createSelector(selectFlight, (substate) => ({
    error: get(substate, "getFlights.error", null),
    msg: get(substate, "getFlights.flights.message", null),
  }));

const makeSelectFlights = () =>
  createSelector(selectFlight, (substate) => {
    const flights = [];
    const allFlights = get(substate, "getFlights.flights.data", null);

    allFlights &&
      allFlights.map((flight) =>
        flights.push({
          id: flight.id,
          fly_duration: flight.fly_duration,
          flyFrom: flight.flyFrom,
          cityFrom: flight.cityFrom,
          flyTo: flight.flyTo,
          cityTo: flight.cityTo,
          airlines: flight.airlines,
          price: flight.price,
          availability: flight.availability,
          dTimeUTC: flight.dTime,
          aTimeUTC: flight.aTime,
        }),
      );
    return flights;
  });

export {
  makeSelectFlight,
  makeSelectIsLoading,
  makeSelectFlights,
  makeSelectError,
};

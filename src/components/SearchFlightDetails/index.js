import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import {
  Wrapper,
  SearchFLight,
  FlightFrom,
  FlightTo,
  SearchButton,
  FlightDestination,
  FlightDuration,
  FlightDetails,
  Row,
  Seats,
  SearchButtonContainer,
} from "./styles";

import {
  makeSelectIsLoading,
  makeSelectFlights,
  makeSelectError,
} from "./selectors";
import { createStructuredSelector } from "reselect";
import { searchFlight as searchFlightAction } from "./actions";
import Spinner from "../../components/Spinner/";
import SearchWeatherDetails from "../SearchWeatherDetails";
import ErrorMessages from "../../components/ErrorMessages";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchFlightDetails = (props) => {
  const classes = useStyles();
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { searchFlight, isLoading, flights, hasError } = props;

  const requiredFields =
    cityFrom.trim() && cityTo.trim() && dateFrom.trim() && dateTo.trim();

  useEffect(() => {
    if (requiredFields) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cityFrom, cityTo, dateFrom, dateTo, requiredFields]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchFlight({
      flyFrom: cityFrom,
      flyTo: cityTo,
      dateFrom: dateFrom,
      dateTo: dateTo,
      v: 3,
    });
  };

  const formatDate = (date) => moment(date).format("DD/MM/YYYY");

  const handleOnChangeCity = (e) =>
    e.target.name === "cityFrom"
      ? setCityFrom(e.target.value)
      : setCityTo(e.target.value);

  const handleChangeDate = (e) =>
    e.target.name === "from"
      ? setDateFrom(formatDate(e.target.value))
      : setDateTo(formatDate(e.target.value));

  return (
    <Wrapper>
      {cityTo && <SearchWeatherDetails data={cityTo} />}
      <form className={classes.container} onSubmit={handleOnSubmit}>
        <SearchFLight>
          <FlightDestination>
            <Row>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="SelectCityFrom-label">
                  Select city From
                </InputLabel>
                <Select
                  name="cityFrom"
                  labelId="SelectCityFrom-label"
                  id="SelectCityFrom"
                  value={cityFrom}
                  onChange={handleOnChangeCity}
                >
                  <MenuItem value="" disabled>
                    Select city
                  </MenuItem>
                  <MenuItem value={"AMS"}>Amsterdam</MenuItem>
                  <MenuItem value={"BUD"}>Budapest</MenuItem>
                  <MenuItem value={"MAD"}>Madrid</MenuItem>
                </Select>
              </FormControl>
            </Row>
            <Row>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="SelectCityFrom-label">
                  Select city To
                </InputLabel>
                <Select
                  name="cityTo"
                  labelId="SelectCityFrom-label"
                  id="SelectCityTo"
                  value={cityTo}
                  onChange={handleOnChangeCity}
                >
                  <MenuItem value="" disabled>
                    Select city
                  </MenuItem>
                  <MenuItem value={"AMS"}>Amsterdam</MenuItem>
                  <MenuItem value={"BUD"}>Budapest</MenuItem>
                  <MenuItem value={"MAD"}>Madrid</MenuItem>
                </Select>
              </FormControl>
            </Row>
          </FlightDestination>
          <FlightDuration>
            <Row>
              <FlightFrom
                id="from"
                name="from"
                label="From"
                className={classes.flightFrom}
                onChange={handleChangeDate}
                type="date"
                InputLabelProps={{
                  shrink: true,
                  name: "Flight From",
                }}
              />
            </Row>
            <Row>
              <FlightTo
                name="to"
                id="to"
                label="To"
                className={classes.flightTo}
                onChange={handleChangeDate}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Row>
          </FlightDuration>
        </SearchFLight>
        <SearchButtonContainer>
          <SearchButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isDisabled}
          >
            Search Flight
          </SearchButton>
        </SearchButtonContainer>
        {hasError.msg && <ErrorMessages msg={hasError.msg} />}
      </form>
      {flights && (
        <FlightDetails>
          {flights.map((flight) => (
            <li key={flight.id}>
              <p>From: {flight.cityFrom} </p>
              <p>To: {flight.cityTo} </p>
              <p>
                Departure:{" "}
                {moment.unix(flight.dTimeUTC).format("DD/MM/YYYY HH:mm")}
              </p>
              <p>
                Arrivals:{" "}
                {moment.unix(flight.aTimeUTC).format("DD/MM/YYYY HH:mm")}
              </p>
              <p>
                Airlines companies:
                {flight &&
                  flight.airlines.map((company) => (
                    <small key={company}> {company} </small>
                  ))}
              </p>
              <p>Duration: {flight.fly_duration} </p>
              <p>Price: {flight.price} €</p>
              {flight.availability.seats && (
                <p>
                  Availability:
                  <Seats value={flight.availability.seats}>
                    {flight.availability.seats}
                  </Seats>
                  seats
                </p>
              )}
            </li>
          ))}
        </FlightDetails>
      )}
      {isLoading && <Spinner />}
    </Wrapper>
  );
};

SearchFlightDetails.propTypes = {
  searchFlightAction: PropTypes.func,
  searchFlight: PropTypes.func,
  isLoading: PropTypes.bool,
  flights: PropTypes.array,
  hasError: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  flights: makeSelectFlights(),
  hasError: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    searchFlight: (data) => dispatch(searchFlightAction(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFlightDetails);

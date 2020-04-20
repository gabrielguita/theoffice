import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import {
  Wrapper,
  Forecast,
  Title,
  Category,
  DailyForecasts,
  ShowWeather,
} from "./styles";
import { makeSelectGetWeather } from "./selectors";
import { createStructuredSelector } from "reselect";
import { searchWeather as searchWeatherAction } from "./actions";
import Spinner from "../../components/Spinner/";
import ErrorMessages from "../../components/ErrorMessages";

const getCity = (data) => {
  switch (data) {
    case "BUD":
      return { city: "Budapest", code: 187423 };
    case "AMS":
      return { city: "Amsterdam", code: 249758 };
    case "MAD":
      return { city: "Madrid", code: 308526 };

    default:
      return false;
  }
};

const toCelsius = (f) => Math.trunc((5 / 9) * (f - 32));
const formatDate = (date) => moment(date).format("DD/MM/YYYY");
const forecastIcon = (i) => {
  return i.toString().length === 1 ? `${"0" + i}` : i;
};

const SearchWeatherDetails = (props) => {
  const { searchWeather, data, getWeather } = props;
  const {
    headline,
    category,
    dailyForecasts,
    isLoading,
    hasError,
  } = getWeather;
  const handleOnCLick = () => {
    searchWeather(getCity(data));
  };
  return (
    <Wrapper>
      <ShowWeather onClick={handleOnCLick}>
        Check the weather in: {getCity(data).city}
      </ShowWeather>
      {hasError && <ErrorMessages msg={hasError} />}
      <Forecast>
        <Title>{headline} </Title>
        <Category>{category}</Category>
        <DailyForecasts>
          {dailyForecasts &&
            dailyForecasts.map((forecast, i) => (
              <li key={i}>
                <p>
                  <strong>Day: </strong> {forecast.Day.PrecipitationType} /{" "}
                  {forecast.Day.PrecipitationIntensity}
                  <img
                    alt="day"
                    src={`https://developer.accuweather.com/sites/default/files/${forecastIcon(
                      forecast.Day.Icon,
                    )}-s.png`}
                  />
                </p>
                <p>
                  <strong>Night: </strong> {forecast.Night.PrecipitationType} /{" "}
                  {forecast.Night.PrecipitationIntensity}
                  <img
                    alt="night"
                    src={`https://developer.accuweather.com/sites/default/files/${forecastIcon(
                      forecast.Night.Icon,
                    )}-s.png`}
                  />
                </p>
                <p>
                  <i>{formatDate(forecast.Date)}</i>
                </p>
                <p>
                  Temperature minimum:{" "}
                  {toCelsius(forecast.Temperature.Minimum.Value)} °C
                </p>
                <p>
                  Temperature maximum:{" "}
                  {toCelsius(forecast.Temperature.Maximum.Value)} °C
                </p>
              </li>
            ))}
        </DailyForecasts>
      </Forecast>
      {isLoading && <Spinner />}
    </Wrapper>
  );
};

SearchWeatherDetails.propTypes = {
  show: PropTypes.object,
  searchWeatherAction: PropTypes.func,
  searchWeather: PropTypes.func,
  isLoading: PropTypes.bool,
  getWeather: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  getWeather: makeSelectGetWeather(),
});

export function mapDispatchToProps(dispatch) {
  return {
    searchWeather: (data) => dispatch(searchWeatherAction(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchWeatherDetails);

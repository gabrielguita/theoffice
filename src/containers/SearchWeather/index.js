import React from "react";
import { Link } from "react-router-dom";
import SearchWeatherDetails from "../../components/SearchWeatherDetails";
import { ButtonContainer } from "./styles";

export const SearchWeather = () => (
  <>
    <ButtonContainer>
      <Link to="/">Back Home</Link>
    </ButtonContainer>
    <SearchWeatherDetails />
  </>
);

export default SearchWeather;

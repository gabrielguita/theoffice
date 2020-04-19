import React from "react";
import SearchWeatherDetails from "../index";

describe("<SearchWeatherDetails />", () => {
  it("should render correctly", () => {
    expect(<SearchWeatherDetails />).toMatchSnapshot();
  });
});

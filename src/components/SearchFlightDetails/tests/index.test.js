import React from "react";
import SearchFlightDetails from "../index";

describe("<SearchFlightDetails />", () => {
  it("should render correctly", () => {
    expect(<SearchFlightDetails />).toMatchSnapshot();
  });
});

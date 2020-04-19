import React from "react";
import App from "./index";

describe("<App />", () => {
  xit("should render correctly", () => {
    expect(<App />).toMatchSnapshot();
  });
});

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./containers/Header/";
import SearchFlight from "./containers/SearchFlight/";
import SearchWeather from "./containers/SearchWeather/";
import store from "./store";
import { AppContainer } from "./AppStyle";

const App = () => (
  <Router>
    <Provider store={store}>
      <AppContainer>
        <Header />
        <Route
          exact
          path="/"
          render={(props) => <SearchFlight props={props} />}
        />
        <Route path="/searchweather" component={SearchWeather} />
      </AppContainer>
    </Provider>
  </Router>
);

export default App;

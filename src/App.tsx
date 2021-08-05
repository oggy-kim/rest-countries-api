import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/:country"
            render={({ match: { params } }) => (
              <CountryDetail name={params.country} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;

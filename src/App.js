import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Home from "./pages/Home";
import PokeDetail from "./pages/PokeDetail";
import "animate.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/:name" component={PokeDetail} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// SCSS
import './assets/scss/main.scss';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

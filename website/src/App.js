import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Home,
  About,
  Products,

  // Login form
  Login,
  // Temporary authenticated page for redirects..
  Welcome
} from './pages';

import {
  Header,
  AppContainer,
} from './components';

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header/>
        <AppContainer>
          <Switch>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/welcome">
              <Welcome />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </AppContainer>
      </Router>
    </div>
  );
}

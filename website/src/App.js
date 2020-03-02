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
  Header
} from './components'

export default function App() {
  return (
    <Router>
        <Switch>

          <Route path="/about">
            <Header />
            <About />
          </Route>
          
          <Route path="/products">
            <Products />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/welcome">
            <Header />
            <Welcome />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
    </Router>
  );
}

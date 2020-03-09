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
        <AppContainer>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </AppContainer>

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

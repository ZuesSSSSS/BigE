import React from "react";
import Helmet from 'react-helmet'
import './styles.scss';

export default function Header() {
  return (
    <div>
      <Helmet>
        <title>BigE</title>
      </Helmet>
      <div class="nav-wrapper">
        <nav id="header">
          <ul class="nav-ul">
            <li class="nav-link">
              <a class="nav-link-a" id="logo" href="/">BigE</a>
            </li>
            <li class="nav-link">
              <a class="nav-link-a" href="/products">| Products |</a>
            </li>
            <li class="nav-link">
              <a class="nav-link-a">|</a>
            </li>
            <li class="nav-link right"> {/* Can't seem to Float to the right side*/}
              <a class="nav-link-a" href="/login">| Login |</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

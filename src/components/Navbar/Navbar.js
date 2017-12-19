import React from 'react'
import "./Navbar.css"

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto row">
    <a className="navbar-brand col-xs-3 col-md-3 brand" href="/">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarNav">
      <ul className="navbar-nav navbar-fixed ml-auto">
        <li className="nav-item">
          <a className="nav-link theme" href="/">Score: {props.score}<span className="vdivide theme">|</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link theme" href="/">High Score: {props.highScore}</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

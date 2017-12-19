import React from 'react';
import './Jumbotron.css'
const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid text-center animated fadeIn">
    <div className="container">
      <h1 className="display-3">Clicky Game</h1>
      <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      <p className="mx-auto col-xs-7 col-md-7">{(props.gameStart) ? 'To start the game click on an image!': (props.correct) ? 'You guessed correctly!': 'You guessed incorrectly!'} </p>
    </div>
  </div>
);
export default Jumbotron;

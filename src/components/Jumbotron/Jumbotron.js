import React from 'react';
import './Jumbotron.css'
const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid text-center animated fadeIn">
    <div id="background-wrap">
      <div className="bubble x1"></div>
      <div className="bubble x2"></div>
      <div className="bubble x3"></div>
      <div className="bubble x4"></div>
      <div className="bubble x5"></div>
      <div className="bubble x6"></div>
      <div className="bubble x7"></div>
      <div className="bubble x8"></div>
      <div className="bubble x9"></div>
      <div className="bubble x10"></div>
    </div>

    <div className="container">
      <img src='https://vignette.wikia.nocookie.net/realtime-fandub/images/4/42/SpongeBob_SquarePants_logo.svg.png/revision/latest?cb=20160921220042' alt="SpongeBob_SquarePants" width='300px'></img>
      <h1 className="display-3"><span className='clicky'>Clicky Game</span></h1>
      <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      <p className="mx-auto col-xs-7 col-md-7">{(props.gameStart) ? 'To start the game click on an image!': (props.correct) ? 'You guessed correctly!': 'You guessed incorrectly!'} </p>
      <a className="theme" href="/">Score: {props.score}<span className="vdivide theme">|</span></a>
      <a className="theme" href="/">High Score: {props.highScore}</a>
    </div>
  </div>
);
export default Jumbotron;

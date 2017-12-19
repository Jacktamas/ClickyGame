import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    userGuess: [],
    gameStart: true,
    score: 0,
    highScore: 0
  };

  handleScore = (id) => {
    // Check to see if this image has already been clicked.
    if (this.state.userGuess.indexOf(id) === -1) {
      // The image has never been clicked.
      this.state.userGuess.push(id);
      this.setState({
        correct: true,
        score: this.state.score + 1,
        userGuess: this.state.userGuess,
        gameStart: false
      });
    } else {
      // The image has been clicked... you lose
      this.setState({
        correct: false,
        score: 0,
        gameStart: false,
        userGuess: [],
        highScore: (this.state.score > this.state.highScore)
          ? this.state.score
          : this.state.highScore
      })
    }

  };


  handleImageClick = (event) => {
    this.shuffuleFriends(this.state.friends);
    this.handleScore(event.target.id)

  };

  shuffuleFriends = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // Set this.state.friends equal to the new friends array
    this.setState({
      friends: array
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron  correct={this.state.correct} score={this.state.score} gameStart={this.state.gameStart}/>
        <Wrapper>
          <div className="row">
            {this.state.friends.map(friend => (
              <FriendCard
                score={this.state.score}
                id={friend.id}
                name={friend.name}
                image={friend.image}
                handleImageClick={this.handleImageClick}
                />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Score from './components/Score'
import pokemon from './pokemon.json';
import "./App.css";

class App extends Component {
  state = {
    pokemon,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(pokemon => {
      pokemon.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  pokeClick = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(pokemon => (
          <Card
            clickCount={this.clickCount}
            id={pokemon.id}
            key={pokemon.id}
            image={pokemon.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;

import React from 'react';

import Header from './header';
import GameGenre from './game-genre';
import GameArtist from './game-artist';
import Footer from './footer';

const gameType = [<GameGenre />, <GameArtist />];
const getRandom = (arr) => arr[Math.floor(Math.random()*arr.length)];

class Screen extends React.Component {
  state = {
    level: 1,
    actualScreen: getRandom(gameType)
  }

  turnScreen = (nextScreen) => {
    this.setState({
      actualScreen: nextScreen
    })
  }

  render() {
    return (
      <section>
        <Header />
        {this.state.actualScreen}
        <Footer />
      </section>
    )
  }
}

export default Screen;

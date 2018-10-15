import React from 'react';

import GameGenre from './game-genre.jsx';
import GameArtist from './game-artist.jsx';


class Question extends React.Component {

  state = {
    bonusTime: 30
  }

  start = () => {
    this.interval = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
    this.setState({
      bonusTime: 30
    })
  }

  tick = () => {
    this.setState({
      bonusTime: this.state.bonusTime - 1
    })
    if (this.state.bonusTime === 0) setInterval(this.interval);
  }

  render () {
    const questionType = {
      artist: <GameArtist
        key={this.props.currentLevel} {...this.props}
        bonusTime={this.state.bonusTime}
        start={this.start}
        stop={this.stop} />,
      genre: <GameGenre
        key={this.props.currentLevel} {...this.props}
        bonusTime={this.state.bonusTime}
        start={this.start}
        stop={this.stop} />,
    };

    return (
      <section>
        {questionType[this.props.currentQuestion.type]}
      </section>
    );
  }

};

export default Question;

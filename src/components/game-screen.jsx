import React from 'react';
import Question from './question.jsx';
import Header from './header.jsx';


class GameScreen extends React.Component {
    state = {
      level: 1,
      lives: 3
    }

  nextLevel = () => {
      if (this.state.level < 10) {
      this.props.nextScreen();
      this.setState({
        level: this.state.level + 1
      })
    } else {
      this.props.showResult();
    }
  }


  render() {

    return (
      <section>
        <Header lives={this.state.lives} livesTotal={this.props.livesTotal} startPlay={this.props.startPlay} />
        <Question nextLevel={this.nextLevel} currentLevel={this.state.level} />
      </section>
    )
  }
}

export default GameScreen;

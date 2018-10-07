import React from 'react';
import Question from './question.jsx';
import Header from './header.jsx';


class GameScreen extends React.Component {
  render() {
    
    const currentQuestion = this.props.questionsData[this.props.level - 1];

    return (
      <section>
        <Header lives={this.props.lives} livesTotal={this.props.livesTotal} startPlay={this.props.startPlay} />
        <Question
          currentQuestion={currentQuestion}
          nextLevel={this.props.nextLevel}
          currentLevel={this.props.level}
          scores={this.props.scores}
          lives={this.props.lives}
          calculateScore={this.props.calculateScore}
          takeLife={this.props.takeLife} />
      </section>
    );
  }
}

export default GameScreen;

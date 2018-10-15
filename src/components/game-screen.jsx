import React from 'react';
import Question from './question.jsx';


class GameScreen extends React.Component {

  componentDidMount = () => {
    if (this.props.level === 1) {
      this.props.startTimer()
    }
  }

  componentWillUnmount = () => {
    this.props.stopTimer();
  }

  render() {
    const currentQuestion = this.props.questionsData[this.props.level - 1];
    const header = this.props.header();

    return (
      <section>
        {header}
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

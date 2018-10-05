import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import GameScreen from './game-screen.jsx';
import ResultFail from './result-fail.jsx';
import ResultSuccess from './result-success.jsx';
import Error from './error.jsx';
import gameData from '../data.js';


class SectionMain extends React.Component {
  state = {
    actualScreen: 'Welcome',
    questions: gameData,
    answers: 0,
    level: 1,
    lives: 3
  }

  beginState = {
    livesTotal: 3
  }

  componentDidMount() {
    //загрузка треков с вопросами
  }

  calculateScore(x) {
    this.setState({
      answers: this.state.answers + x
    })
  }

  takeLife() {
    this.setState({
      lives: this.state.lives -1
    })
  }

  nextLevel = () => {
      if (!this.isLast()) {
      this.nextScreen('GameScreen');
      this.setState({
        level: this.state.level + 1
      })
    }
  }

  nextScreen = screen => {
    this.setState({
      actualScreen: screen
    })
  }

  startPlay = () => {
    this.setState({
      actualScreen: 'Welcome',
      answers: 0,
      level: 1,
      lives: 3
    })
  }

  isAlive() {
    return this.state.lives > 0;
  }

  isLast() {
    return this.state.level === this.state.questions.length;
  }

  render() {
    const { lives, level, levelsTotal, livesTotal } = this.props;

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'GameScreen': <GameScreen
        level={this.state.level}
        lives={this.state.lives}
        levelsTotal={this.state.questions.length}
        livesTotal={this.beginState.livesTotal}
        nextScreen={this.nextScreen.bind(this, 'GameScreen')}
        startPlay={this.startPlay}
        isAlive={this.isAlive}
        isLast={this.isLast}
        nextLevel={this.nextLevel.bind(this)}
        questionsData={this.state.questions}
        answers={this.state.answers}
        calculateScore={this.calculateScore.bind(this)}
        takeLife={this.takeLife.bind(this)} />,
      'ResultSuccess': <ResultSuccess startPlay={this.startPlay} />,
      'ResultFail': <ResultFail startPlay={this.startPlay} />
    }

    let actualScreen;

    switch(this.state.actualScreen) {
      case 'Welcome':
      actualScreen = screenKind['Welcome'];
      break;
      case 'GameScreen':
      if (this.isAlive() && !this.isLast()) {
        actualScreen = screenKind['GameScreen'];
      } else if (this.isAlive() && this.isLast()) {
        actualScreen = screenKind['ResultSuccess'];
      } else {
        actualScreen = screenKind['ResultFail'];
      }
      break;
      default: actualScreen = <Error />;
    }

    return (
      <section>
        {actualScreen}
      </section>
    )
  }
}

export default SectionMain;

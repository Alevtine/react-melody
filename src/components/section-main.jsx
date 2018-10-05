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

  calculateScore = (x) => {
    this.setState(prevState => ({
      answers: prevState.answers + x,
    }))
  }

  takeLife = () => {
    this.setState(prevState => ({
      lives: prevState.lives - 1,
    }))
  }

  nextLevel = () => {
      if (!this.isLast()) {
      this.nextScreen('GameScreen');
      this.setState(prevState => ({
        level: prevState.level + 1,
      }))
    }
  }

  nextScreen = screen => () => { // функция высшего порядка
    this.setState({
      actualScreen: screen,
    })
  };

  startPlay = () => {
    this.setState({
      actualScreen: 'Welcome',
      answers: 0,
      level: 1,
      lives: 3
    })
  }

  isAlive = () => {
    return this.state.lives > 0;
  }

  isLast = () => {
    return this.state.level === this.state.questions.length;
  }

  render() {
    const { questions } = this.state;

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen('GameScreen')} />,
      'GameScreen': <GameScreen
        level={this.state.level}
        lives={this.state.lives}
        levelsTotal={questions.length}
        livesTotal={this.beginState.livesTotal}
        nextScreen={this.nextScreen('GameScreen')}
        startPlay={this.startPlay}
        isAlive={this.isAlive}
        isLast={this.isLast}
        nextLevel={this.nextLevel}
        questionsData={questions}
        answers={this.state.answers}
        calculateScore={this.calculateScore}
        takeLife={this.takeLife} />,
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
      default:
        actualScreen = <Error />;
    }

    return (
      <section>
        {actualScreen}
      </section>
    )
  }
}

export default SectionMain;

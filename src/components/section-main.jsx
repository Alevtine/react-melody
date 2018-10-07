import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import GameScreen from './game-screen.jsx';
import ResultFail from './result-fail.jsx';
import ResultSuccess from './result-success.jsx';
import ErrorBlock from './error.jsx';
import gameData from '../data.js';


class SectionMain extends React.Component {
  state = {
    actualScreen: 'Welcome',
    questions: gameData,
    scores: 0,
    level: 1,
    lives: 3
  }

  beginState = {
    livesTotal: 3
  }

  // componentDidMount() {
  //   const url = 'https://es.dump.academy/guess-melody/questions';
  //   fetch(url, { method: 'GET' })
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({
  //       questions: data
  //     })
  //   })
  // }

  calculateScore(x) {
    this.setState({
      scores: this.state.scores + x
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


  saveResult = () => {
    const gameScores = this.state.scores;
    const url = 'https://es.dump.academy/guess-melody/stats/468133';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ scores: gameScores })
    })
  }


    loadStats () {
      const url = 'https://es.dump.academy/guess-melody/stats/468133';
      const data = fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => this.ratePlayer(data))
    }

    ratePlayer (data) {
      const allPlayersPoints = data.map(item => item.scores);
      allPlayersPoints.push(this.state.scores)
      const ratedResults = allPlayersPoints.sort((a,b) => b - a);
      const playerPlace = ratedResults.findIndex(item => item === this.state.scores) + 1;
      const rating = 100 - playerPlace * 100 / ratedResults.length;
      const dataToRender = { playerPlace, rating, playerPoints: this.state.scores };

      return dataToRender;
    }

  nextScreen = screen => {
    this.setState({
      actualScreen: screen
    })
  }

  startPlay = () => {
    this.setState({
      actualScreen: 'Welcome',
      scores: 0,
      level: 1,
      lives: 3
    })
  }

  isAlive() {
    return this.state.lives > 0;
  }

  isLast() {
    return this.state.level === this.state.questions.length + 1;
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
        scores={this.state.scores}
        calculateScore={this.calculateScore.bind(this)}
        takeLife={this.takeLife.bind(this)} />,
      'ResultSuccess': <ResultSuccess startPlay={this.startPlay} stats={this.props.dataToRender} lives={this.state.lives} />,
      'ResultFail': <ResultFail startPlay={this.startPlay} />,
      'ErrorBlock': <ErrorBlock />
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
            this.saveResult();
            this.loadStats();
            actualScreen = screenKind['ResultSuccess'];
          } else {
            actualScreen = screenKind['ResultFail'];
          }
          break;
          case 'ErrorBlock':
          actualScreen = screenKind['ErrorBlock'];
          break;
          default: actualScreen = screenKind['ErrorBlock'];
        }

    return (
      <section>
        {actualScreen}
      </section>
    )
  }
}

export default SectionMain;

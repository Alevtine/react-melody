import React from 'react';

import Footer from './footer.jsx';
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
    lives: 3,
    time: 300,
    ratingData: null,
    errorInfo: null
  }

  beginState = {
    livesTotal: 3,
  }

  checkStatus = (response) => {
    if (response.status === 200) {
      return response;
    }
      throw new Error(response.status)
  }

  // componentDidMount() {
  //   const url = 'https://es.dump.academy/guess-melody/questions';
  //   fetch(url, { method: 'GET' })
  //   .then(this.checkStatus)
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({
  //       questions: data
  //     })
  //   })
  //   .catch((err) => {
  //     this.setState({
  //       actualScreen: 'ErrorBlock',
  //       errorInfo: err.message
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
      lives: this.state.lives - 1
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
    const url = 'https://es.dump.academy/guess-melody/stats/468135';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ scores: gameScores })
    })
  }


    loadStats () {
      const url = 'https://es.dump.academy/guess-melody/stats/468135';
      fetch(url, {
        method: 'GET'
      })
      .then(this.checkStatus)
      .then(response => response.json())
      .then(data => this.ratePlayer(data))
      .catch((err) => {
        this.setState({
          actualScreen: 'ErrorBlock',
          errorInfo: err.message
        })
      })
    }

    ratePlayer (data) {
      const allPlayersPoints = data.map(item => item.scores);
      allPlayersPoints.push(this.state.scores)
      const ratedResults = allPlayersPoints.sort((a,b) => b - a);
      const playerPlace = ratedResults.findIndex(item => item === this.state.scores) + 1;
      const rating = Math.floor(100 - playerPlace * 100 / ratedResults.length);
      const dataToRender = { playerPlace: playerPlace, rating: rating,  playersQtty: ratedResults.length };
      this.setState({
        actualScreen: 'StatScreen',
        ratingData: dataToRender
      })
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
      lives: 3,
      time: 300
    })
    this.stopTimer()
  }

  totalTimeTick = () => {
    this.setState({
      time: this.state.time - 1
    });
    if (this.isTimeOut()) {
      clearInterval(this.interval);
    }
  }

  startTimer = () => {
    this.interval = setInterval(this.totalTimeTick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.interval);
  }

  isAlive() {
    return this.state.lives > 0;
  }

  isLast() {
    return this.state.level === this.state.questions.length + 1;
  }

  isTimeOut() {
    return this.state.time === 0;
  }

  render() {

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
        takeLife={this.takeLife.bind(this)}
        time={this.state.time}
        startTimer={this.startTimer}
        stopTimer={this.stopTimer} />,
      'ResultSuccess': <ResultSuccess
        startPlay={this.startPlay}
        stats={this.state.ratingData}
        lives={this.state.lives}
        playerScore={this.state.scores}
        livesTotal={this.beginState.livesTotal}
        time={this.state.time} />,
      'ResultFail': <ResultFail startPlay={this.startPlay} time={this.state.time} lives={this.state.lives} />,
      'ErrorBlock': <ErrorBlock errorInfo={this.state.errorInfo} />
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
          } else {
            actualScreen = screenKind['ResultFail'];
          }
          break;
          case 'StatScreen':
          actualScreen = screenKind['ResultSuccess'];
          break;
          case 'ErrorBlock':
          actualScreen = screenKind['ErrorBlock'];
          break;
          default: actualScreen = screenKind['ErrorBlock'];
        }

    return (
      <section>
        {actualScreen}
        <Footer />
      </section>
    )
  }
}

export default SectionMain;

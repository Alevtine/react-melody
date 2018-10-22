import React from 'react';

import Header from './header.jsx';
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
    fastCounter: 0,
    ratingData: null,
    errorInfo: null
  }

  beginState = {
    livesTotal: 3,
  }

  componentDidMount() {
    const url = 'https://es.dump.academy/guess-melody/questions';
    fetch(url, { method: 'GET' })
    .then(this.checkStatus)
    .then(response => response.json())
    .then((data) => {
      data.forEach(question => {
          if (question.type === 'artist') {
            question.mp3 = this.loadTrack(question.src)
          } else if (question.type === 'genre') {
            question.answers.forEach(answer => answer.mp3 = this.loadTrack(answer.src))
          }
      })
      this.setState({
        questions: data
      })
    })
    .catch((err) => {
      this.setState({
        actualScreen: 'ErrorBlock',
        errorInfo: err.message
      })
    })
  }

  loadTrack = (url) => {
      return <source src={url} type="audio/mpeg" />;
    }


  checkStatus = (response) => {
    if (response.status === 200) {
      return response;
    }
      throw new Error(response.status)
  }

    saveResult = () => {
      const gameScores = this.state.scores;
      const url = 'https://es.dump.academy/guess-melody/stats/468130';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ scores: gameScores })
      })
      .then(this.checkStatus)
      .then(response => {
        console.log(response)
        this.loadStats();
      })
      .catch((err) => {
        this.setState({
          actualScreen: 'ErrorBlock',
          errorInfo: err.message
        })
      })
    }


    loadStats () {
      const url = 'https://es.dump.academy/guess-melody/stats/468130';
      return fetch(url, {
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
      const ratedResults = allPlayersPoints.sort((a,b) => b - a);
      const playerPlace = ratedResults.findIndex(item => item === this.state.scores) + 1;
      const rating = Math.floor(100 - playerPlace * 100 / ratedResults.length);
      const dataToRender = { playerPlace: playerPlace, rating: rating,  playersQtty: ratedResults.length };
      this.setState({
        actualScreen: 'StatScreen',
        ratingData: dataToRender
      })
    }

    calculateScore(points, fastFlag) {
      this.setState({
        scores: this.state.scores + points,
        fastCounter: fastFlag ? this.state.fastCounter + 1 : this.state.fastCounter
      })
    }

    takeLife = () => {
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
      time: 300,
      fastCounter: 0
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

  renderHeader = () => {
    return <Header
      lives={this.state.lives}
      livesTotal={this.beginState.livesTotal}
      startPlay={this.startPlay} />
  }

  render() {

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'GameScreen': <GameScreen
        header={this.renderHeader}
        level={this.state.level}
        levelsTotal={this.state.questions.length}
        nextScreen={this.nextScreen.bind(this, 'GameScreen')}
        isAlive={this.isAlive}
        isLast={this.isLast}
        nextLevel={this.nextLevel.bind(this)}
        questionsData={this.state.questions}
        scores={this.state.scores}
        calculateScore={this.calculateScore.bind(this)}
        takeLife={this.takeLife}
        startTimer={this.startTimer}
        stopTimer={this.stopTimer}
        time={this.state.time} />,
      'ResultSuccess': <ResultSuccess
        startPlay={this.startPlay}
        stats={this.state.ratingData}
        lives={this.state.lives}
        playerScore={this.state.scores}
        livesTotal={this.beginState.livesTotal}
        time={this.state.time}
        fastCounter={this.state.fastCounter} />,
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

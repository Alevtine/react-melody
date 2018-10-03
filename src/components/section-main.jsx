import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import GameScreen from './game-screen.jsx';
import ResultFail from './result-fail.jsx';
import ResultSuccess from './result-success.jsx';
import Error from './error.jsx';


class SectionMain extends React.Component {
  state = {
    actualScreen: 'Welcome',
    questions: [],
    answers: [],
    level: 1,
    lives: 3
  }

  componentDidMount() {
    //загрузка треков с вопросами
  }

  updateState = data => {
    this.setState({
      lives: data.lives,
      level: data.level + 1
    })
  }


  nextScreen = screen => {
    this.setState({
      actualScreen: screen
    })
  }

  startPlay = () => {
    this.setState({
      actualScreen: 'Welcome'
    })
  }

  isAlive() {
    return this.state.lives > 0;
  }

  isLast() {
    return this.state.level === this.props.levelsTotal;
  }

  render() {
    const { lives, level, levelsTotal, livesTotal } = this.props;

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'GameScreen': <GameScreen
        levelsTotal={this.props.levelsTotal}
        livesTotal={this.props.livesTotal}
        nextScreen={this.nextScreen.bind(this, 'GameScreen')}
        startPlay={this.startPlay}
        showResult={this.showResult}
        isAlive={this.isAlive}
        isLast={this.isLast}
        updateState={this.updateState.bind(this)} />,
      'ResultSuccess': <ResultSuccess nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'ResultFail': <ResultFail nextScreen={this.nextScreen.bind(this, 'GameScreen')} />
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

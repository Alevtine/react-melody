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
    answers: []
  }

  componentDidMount() {
    //загрузка треков с вопросами
  }

  // componentWillReceiveProps(nextProps) {

  // }


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
    return this.props.lives > 0;
  }

  isLast() {
    return this.props.level === this.props.levelsTotal;
  }

  showResult = () => {
      if (this.isAlive() && this.isLast()) {
      this.setState({
        actualScreen: 'ResultSuccess'
      })
    } else {
      this.setState({
        actualScreen: 'ResultFail'
      })
    }
  }


  render() {
    const { lives, level, levelsTotal, livesTotal } = this.props;

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'GameScreen': <GameScreen
        lives={this.props.lives}
        level={this.props.level}
        levelsTotal={this.props.levelsTotal}
        livesTotal={this.props.livesTotal}
        nextScreen={this.nextScreen.bind(this, 'GameScreen')}
        startPlay={this.startPlay}
        showResult={this.showResult}
        isAlive={this.isAlive}
        isLast={this.isLast} />,
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
      } else {
        this.showResult();
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

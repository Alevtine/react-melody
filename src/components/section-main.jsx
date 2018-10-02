import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import GameScreen from './game-screen.jsx';
import ResultFail from './result-fail.jsx';
import ResultSuccess from './result-success.jsx';


class SectionMain extends React.Component {
  state = {
    actualScreen: 'Welcome',
    questions: []
  }

  componentDidMount() {
    //загрузка треков с вопросами
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


  render() {
    const { lives, levelsTotal, livesTotal } = this.props;

    const screenKind = {
      'Welcome': <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'GameScreen': <GameScreen lives={this.props.lives} levelsTotal={this.props.levelsTotal} livesTotal={this.props.livesTotal} nextScreen={this.nextScreen.bind(this, 'GameScreen')} startPlay={this.startPlay} />,
      'ResultSuccess': <ResultSuccess nextScreen={this.nextScreen.bind(this, 'GameScreen')} />,
      'ResultFail': <ResultFail nextScreen={this.nextScreen.bind(this, 'GameScreen')} />
    }

    let actualScreen;
    switch(this.state.actualScreen) {
      case 'Welcome':
      actualScreen = screenKind['Welcome'];
      break;
      case 'GameScreen':
      if (this.props.lives >= 1) {
        actualScreen = screenKind['GameScreen'];
      } else {
        actualScreen = screenKind['ResultFail'];
      }
      break;
      default: actualScreen = <div>Error</div>;
    }

    return (
      <section>
        {actualScreen}
      </section>
    )
  }
}

export default SectionMain;

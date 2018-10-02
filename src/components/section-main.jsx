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

  startPlay() {
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

    return (
      <section>
        {screenKind[this.state.actualScreen]}
      </section>
    )
  }
}

export default SectionMain;

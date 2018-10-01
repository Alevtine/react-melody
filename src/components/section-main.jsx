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


  render() {
    let actualScreen;
    if (this.state.actualScreen === 'Welcome') {
      actualScreen = <Welcome nextScreen={this.nextScreen.bind(this, 'GameScreen')} />;
    } else if (this.state.actualScreen === 'GameScreen') {
      actualScreen = <GameScreen nextScreen={this.nextScreen.bind(this, 'ResultSuccess')} />;
    } else if (this.state.actualScreen === 'ResultSuccess') {
      actualScreen = <ResultFail nextScreen={this.nextScreen.bind(this, 'ResultFail')} />;
    }

    return (
      <section>
        {actualScreen}
      </section>
    )
  }
}

export default SectionMain;

import React from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import Screen from './screen.jsx';
import ResultFail from './result-fail.jsx';


class SectionMain extends React.Component {
  state = {
    actualScreen: 'Welcome'
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
      actualScreen = <Welcome nextScreen={this.nextScreen('Screen')} />;
    } else if (this.state.actualScreen === 'Screen') {
      actualScreen = <Screen nextScreen={this.nextScreen('ResultFail')} />;
    }

    return (
      <section>
        <Screen />
        {/* {actualScreen} */}
      </section>
    )
  }
}

export default SectionMain;

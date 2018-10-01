import React from 'react';

import Footer from './components/footer.jsx';
import SectionMain from './components/section-main.jsx';


class App extends React.Component {
  state = {
    lives: 3
  }

  beginState = {
    levelsTotal: 10,
    livesTotal: 3
  }

  render() {
    return (
      <section>
        <SectionMain lives={this.state.lives} levelsTotal={this.beginState.levelsTotal} livesTotal={this.beginState.livesTotal} />
        <Footer />
      </section>
    );
  }
}

export default App;

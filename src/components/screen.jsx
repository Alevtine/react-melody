import React from 'react';
import Question from './question.jsx';


class Screen extends React.Component {
    state = {
      level: 1,
      lives: 3
    }

  nextLevel = () => {
    if (this.state.level < 10) {
    this.props.nextScreen();
  }
}

  componentWillReceiveProps(nextProps) {
    nextProps.lives > 1 ? this.nextLevel() : false;
  }

  render() {
    return (
      <section>
        <Question />
      </section>
    )
  }
}

export default Screen;

import React from 'react';
import Lives from './lives.jsx';
import Timer from './timer.jsx';
import ResetButton from './reset-button';

class Header extends React.Component {
  render() {
    const { lives, time } = this.props;
    return (
      <header className="game__header">
        <ResetButton showModal={this.props.showModal} />
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: 'url(.#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}/>
        </svg>
        <Timer time={time} />
        <Lives lives={lives} />
      </header>
    );
  }
}

export default Header;

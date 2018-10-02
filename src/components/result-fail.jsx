import React from 'react';
import ReplayButton from './replay-button.jsx';

class ResultFail extends React.Component {
  render() {
    return (
      <section className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="result__title">Увы и ах!</h2>
        <p className="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
        <ReplayButton nextScreen={this.props.nextScreen} />
      </section>
    );
  }
}

export default ResultFail;

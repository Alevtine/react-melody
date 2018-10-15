import React from 'react';
import ReplayButton from './replay-button.jsx';

class ResultFail extends React.Component {
  render() {
    const failType = {
      tries: {
        title: 'Какая жалость!',
        resultPhraze: 'У вас закончились все попытки. Ничего, повезёт в следующий раз!',
      },
      time: {
        title: 'Увы и ах!',
        resultPhraze: 'Время вышло! Вы не успели отгадать все мелодии',
      },
    };

    let actualFailScreen;

    if (this.props.lives === 0) {
      actualFailScreen = failType.tries;
    } else if (this.props.time === 0) {
      actualFailScreen = failType.time;
    }

    return (
      <section className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="result__title">{actualFailScreen.title}</h2>
        <p className="result__total result__total--fail">{actualFailScreen.resultPhraze}</p>
        <ReplayButton startPlay={this.props.startPlay} />
      </section>
    );
  }
}

export default ResultFail;

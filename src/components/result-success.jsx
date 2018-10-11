import React from 'react';
import ReplayButton from './replay-button.jsx';

class ResultSuccess extends React.Component {
  render() {

    const { playerScore,
            livesTotal,
            lives,
            startPlay,
            time,
            stats: {
              playerPlace, playersQtty, rating
            }
          } = this.props;

    return (
      <section className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="result__title">Вы настоящий меломан!</h2>
        <p className="result__total">За {time} секунд вы набрали {playerScore} баллов (8 быстрых), совершив {livesTotal-lives} ошибки</p>
        <p className="result__text">Вы заняли {playerPlace} место из {playersQtty}. Это лучше чем у {rating}% игроков</p>
        <ReplayButton startPlay={startPlay} />
      </section>
    );
  }
}

export default ResultSuccess;

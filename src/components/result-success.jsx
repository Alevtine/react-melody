import React from 'react';
import ReplayButton from './replay-button.jsx';

class ResultSuccess extends React.Component {
  render() {

    const { playerScore,
            livesTotal,
            lives,
            startPlay,
            time,
            fastCounter,
            stats: {
              playerPlace, playersQtty, rating
            }
          } = this.props;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <section className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="result__title">Вы настоящий меломан!</h2>
        <p className="result__total">За {minutes} мин {seconds} сек вы набрали {playerScore} баллов ({fastCounter} быстрых), совершив {livesTotal-lives} ошибки</p>
        <p className="result__text">Вы заняли {playerPlace} место из {playersQtty}. Это лучше чем у {rating}% игроков</p>
        <ReplayButton startPlay={startPlay} />
      </section>
    );
  }
}

export default ResultSuccess;

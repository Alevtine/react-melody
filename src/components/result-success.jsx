import React from 'react';
import ReplayButton from './replay-button.jsx';

class ResultSuccess extends React.Component {

  render() {
    return (
      <section className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="result__title">Вы настоящий меломан!</h2>
        <p className="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
        <p className="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
        <ReplayButton nextScreen={this.props.nextScreen}/>
      </section>
    )
  }
}

export default ResultSuccess;

import React from 'react';
import logo from '../img/melody-logo-ginger.png';

class Welcome extends React.Component {

  handleClick = () => {
    this.props.nextScreen()
  }

  render() {
    return (
      <section className="welcome">
        <div className="welcome__logo"><img src={logo} alt="Угадай мелодию" width="186" height="83" /></div>
        <button className="welcome__button" onClick={this.handleClick}><span className="visually-hidden">Начать игру</span></button>
        <h2 className="welcome__rules-title">Правила игры</h2>
        <p className="welcome__text">Правила просты:</p>
        <ul className="welcome__rules-list">
          <li>За 5 минут нужно ответить на все вопросы.</li>
          <li>Можно допустить 3 ошибки.</li>
        </ul>
        <p className="welcome__text">Удачи!</p>
      </section>
    );
  }
}

export default Welcome;

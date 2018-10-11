import React from 'react';

const ResetButton = props => (
  <a className="game__back" href=" " onClick={props.startPlay}>
    <span className="visually-hidden">Сыграть ещё раз</span>
    <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
  </a>
);

export default ResetButton;

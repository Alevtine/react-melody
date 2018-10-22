import React from 'react';
import logo from '../img/melody-logo-ginger.png'

const ResetButton = props => (
  <a className="game__back" onClick={props.showModal}>
    <span className="visually-hidden">Сыграть ещё раз</span>
    <img className="game__logo" src={logo} alt="Угадай мелодию" />
  </a>
);

export default ResetButton;

import React from 'react';

const ErrorBlock = (props) => (
  <section className="modal">
    <h2 className="modal__title">Произошла ошибка!</h2>
    <p className="modal__text">Статус: {props.errorInfo}. Пожалуйста, перезагрузите страницу.</p>
  </section>
);

export default ErrorBlock;

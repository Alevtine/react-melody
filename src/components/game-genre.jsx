import React from 'react';

class GameGenre extends React.Component {

  handleClick = (event) => {
    const {
      currentQuestion: {
        genre: correctType,
        answers
      },
      calculateScore,
      takeLife,
      nextLevel
    } = this.props;


    const correctAnswers = answers.filter(answer => answer.genre === correctType);
    const checkedAnswers = document.querySelectorAll('input:checked');
    const userAnswers = [];
    const wrongScore = -2;
    const rightScore = 1;

    checkedAnswers.forEach(item => userAnswers.push(item.dataset.genre));

    if (userAnswers.length === correctAnswers.length && userAnswers.every(item => item === correctType) === true) {
      calculateScore(rightScore)
    } else {
      calculateScore(wrongScore);
      takeLife();
    }
    nextLevel();
  }

  render() {
    const {
      question: title,
      answers
    } = this.props.currentQuestion;

    const renderedAnswers = []

    for (let i = 0; i < answers.length; i++) {
      let answerNode = (
        <div className="track" key={i}>
          <button className="track__button track__button--play" type="button" />
          <div className="track__status">
            <audio>
              <source preload="auto" src={answers[i].src} type="audio/mpeg" autoPlay />
            </audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" data-genre={answers[i].genre} value={`answer-${i}`} id={`answer-${i}`} />
            <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
          </div>
        </div>
      )
      renderedAnswers.push(answerNode)
    }

    return (
      <section className="game game--genre">
        <section className="game__screen">
          <h2 className="game__title">{title}</h2>
          <form className="game__tracks">
            {renderedAnswers}
            <button className="game__submit button" onClick={this.handleClick} type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

export default GameGenre;

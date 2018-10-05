import React from 'react';

class GameGenre extends React.Component {

  handleClick(event) {
    const { currentLevel, nextLevel, answers } = this.props;
    const correctAnswer = this.props.currentQuestion.genre;
  //  const userAnswer = по инпуту все checked сравнить с correctAnswer
    this.props.nextLevel();
  }

  render() {
    const title = this.props.currentQuestion.question;
    const answers = this.props.currentQuestion.answers;
    const renderedAnswers = []

    for (let i = 1; i <= answers.length; i++) {
      let answerNode = (
        <div className="track" key={i}>
          <button className="track__button track__button--play" type="button" />
          <div className="track__status">
            {/* <audio>
              <source preload="auto" src={answers[i].src} type="audio/mpeg" autoPlay />
            </audio> */}
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
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
            <button className="game__submit button" onClick={(event) => this.handleClick(event)} type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

export default GameGenre;

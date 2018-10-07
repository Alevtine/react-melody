import React from 'react';


class GameArtist extends React.Component {

  handleChange = (event) => {
    const {
      currentQuestion: { answers },
      calculateScore,
      takeLife,
      nextLevel
    } = this.props;

    const correctAnswerIdx = answers.findIndex(answer => answer.isCorrect === true);
    const userAnswer = +event.target.id.match(/\d+$/g);
    const wrongScore = -2;
    const rightScore = 6;

    if (userAnswer === correctAnswerIdx) {
      calculateScore(rightScore);
    } else {
      calculateScore(wrongScore);
      takeLife();
    }
    nextLevel();
  }

  render() {
    const {
      question: title,
      answers,
      src
    } = this.props.currentQuestion;

    const renderedAnswers = [];

    for (let i = 0; i < answers.length; i++) {
      let answerNode = (
          <div className="artist" key={i}>
            <input className="artist__input visually-hidden"
              onChange={this.handleChange}
              type="radio"
              name="answer"
              value={`artist-${i}`}
              id={`answer-${i}`} />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answers[i].image.url} alt={answers[i].title} />
              {answers[i].title}
            </label>
          </div>
      );
      renderedAnswers.push(answerNode);
    }

    return (
      <section className="game game--artist">
        <section className="game__screen">
          <h2 className="game__title">{title}</h2>
          <div className="game__track">
            <button className="track__button track__button--play" type="button" />
            <audio>
              <source preload="auto" src={src} type="audio/mpeg" autoPlay />
            </audio>
          </div>
          <form className="game__artist">
            {renderedAnswers}
          </form>
        </section>
      </section>
    );
  }
}


export default GameArtist;

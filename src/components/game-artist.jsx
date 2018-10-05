import React from 'react';


class GameArtist extends React.Component {

  handleChange(event) {
    const { currentLevel, nextLevel, answers } = this.props;
    const correctAnswerIdx = this.props.currentQuestion.answers.indexOf(this.props.currentQuestion.answers.filter(answer => answer.isCorrect === true)[0]) + 1;
    const userAnswer = +event.target.id.match(/\d+$/g);
    const wrongScore = -2;
    const rightScore = 1;

    if (userAnswer === correctAnswerIdx) {
      this.props.calculateScore(rightScore);
    } else {
      this.props.calculateScore(wrongScore);
      this.props.takeLife();
    }

    this.props.nextLevel();
  }


  render() {
    const title = this.props.currentQuestion.question;
    const answers = this.props.currentQuestion.answers;
    let answerNode;
    const renderedAnswers = [];

    for (let i = 0; i < answers.length; i++) {
      answerNode = (
        <div className="artist" key={i}>
          <input className="artist__input visually-hidden" onChange={event => this.handleChange(event)} type="radio" name="answer" value={`artist-${i + 1}`} id={`answer-${i + 1}`} />
          <label className="artist__name" htmlFor={`answer-${i + 1}`}>
            <img className="artist__picture" src={answers[i].image.url} alt="Пелагея" />
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
              <source preload="auto" src={this.props.currentQuestion.src} type="audio/mpeg" autoPlay />
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

import React from 'react';

class GameArtist extends React.Component {

  componentDidMount = () => {
    this.props.stop()
    this.props.start()
  }

  handleSound = (evt) => {
    const audio = document.querySelector('audio');
    const button = evt.target;
    const playClass = 'track__button--play';
    const pauseClass = 'track__button--pause';

    button.classList.contains(playClass) ?
      button.classList.replace(playClass, pauseClass) &&
      audio.play() :
      button.classList.replace(pauseClass, playClass) &&
      audio.pause();
  }

  handleChange = (event) => {
    const {
      currentQuestion: { answers },
      calculateScore,
      takeLife,
      nextLevel,
      bonusTime,
      stop
    } = this.props;

    const correctAnswerIdx = answers.findIndex(answer => answer.isCorrect === true);
    const userAnswer = +event.target.id.match(/\d+$/g);
    const wrongScore = -2;
    let rightScore = 1;
    let fastFlag = false;

    if (userAnswer === correctAnswerIdx) {
      if (bonusTime > 0) {
        rightScore += 1;
        fastFlag = true;
      }
      calculateScore(rightScore, fastFlag);
    } else {
      calculateScore(wrongScore);
      takeLife();
    }
    stop();
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
            <button className="track__button track__button--play" onClick={this.handleSound} type="button" />
            <audio>
              <source preload="auto" src={src} type="audio/mpeg" autoPlay={true} />
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

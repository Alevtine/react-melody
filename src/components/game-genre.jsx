import React from 'react';

class GameGenre extends React.Component {

  componentDidMount = () => {
    this.props.start();
  }

  handleSound = (evt) => {
    const buttons = document.querySelectorAll('.track__button');
    const audios = document.querySelectorAll('audio');
    const currentIdx = evt.target.dataset.number;
    const playClass = 'track__button--play';
    const pauseClass = 'track__button--pause';

    const audioOn = (button, audio) => {
      button.classList.replace(playClass, pauseClass);
      audio.play();
    }

    const audiosOff = (button, audio) => {
      button.classList.replace(pauseClass, playClass);
      audio.pause();
    }

    const currentAudioOff = () => {
        buttons[currentIdx].classList.replace(pauseClass, playClass);
        audios[currentIdx].pause();
    }

    buttons.forEach((button, index) => {
      if (button !== document.activeElement) {
        audiosOff(button, audios[index]);
      }
    })

    if (buttons[currentIdx].classList.contains(pauseClass)) {
      currentAudioOff();
    } else {
      audioOn(buttons[currentIdx], audios[currentIdx]);
    }

  }

  handleClick = (event) => {
    const {
      currentQuestion: {
        genre: correctType,
        answers,
      },
      calculateScore,
      takeLife,
      nextLevel,
      bonusTime,
      stop,
    } = this.props;


    const correctAnswers = answers.filter(answer => answer.genre === correctType);
    const checkedAnswers = document.querySelectorAll('input:checked');
    const submitButton = document.querySelector('.game__submit.button');
    const userAnswers = [];
    const wrongScore = -2;
    let rightScore = 1;
    let fastFlag = false;

    checkedAnswers.forEach(item => userAnswers.push(item.dataset.genre))

    if (userAnswers.length === correctAnswers.length && userAnswers.every(item => item === correctType) === true) {
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
    } = this.props.currentQuestion;

    const renderedAnswers = [];

    for (let i = 0; i < answers.length; i++) {

      let isAutoPlay = i === 0 ? true : false;
      let pauseMark = i === 0 ? 'pause' : 'play';

      let answerNode = (
        <div className="track" key={i}>
          <button className={`track__button track__button--${pauseMark}`} data-number={i} type="button" onClick={this.handleSound} />
          <div className="track__status">
            <audio preload="auto" autoPlay={isAutoPlay}>{answers[i].mp3}</audio>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden"
              type="checkbox"
              name="answer"
              data-genre={answers[i].genre}
              value={`answer-${i}`}
              id={`answer-${i}`} />
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

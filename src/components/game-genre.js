import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './screen';


class GameGenre extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    render() {
      return (
          <section className="game game--genre">
            <section className="game__screen">
              <h2 className="game__title">Выберите инди-рок треки</h2>
              <form className="game__tracks">
                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" />
                    <label className="game__check" htmlFor="answer-1">Отметить</label>
                  </div>
                </div>

                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2" />
                    <label className="game__check" htmlFor="answer-2">Отметить</label>
                  </div>
                </div>

                <div className="track">
                  <button className="track__button track__button--pause" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3" />
                    <label className="game__check" htmlFor="answer-3">Отметить</label>
                  </div>
                </div>

                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4" />
                    <label className="game__check" htmlFor="answer-4">Отметить</label>
                  </div>
                </div>

                <button className="game__submit button" type="submit">Ответить</button>
              </form>
            </section>
          </section>
    );
  }

  handleClick() {
    const submitButton = document.querySelector(`button.game__submit`);
    const gameForm = document.querySelector(`.game__tracks`);

    gameForm.addEventListener(`change`, () => {
      const checkedAnswers = gameForm.querySelectorAll(`input[type="checkbox"]:checked`);
      if (checkedAnswers.length >= 1) {
        submitButton.removeAttribute(`disabled`);
      } else if (!checkedAnswers.length) {
        submitButton.setAttribute(`disabled`, true);
      }
    });

    ReactDOM.render(<Screen />, document.getElementById('root'))
  }

}

export default GameGenre;

import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './screen';

class GameArtist extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

  render() {
    return (
    <section className="game game--artist">
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <button className="track__button track__button--play" type="button"></button>
          <audio></audio>
        </div>

        <form className="game__artist">
          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1"/>
            <label className="artist__name" htmlFor="answer-1">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея"/>
              Пелагея
            </label>
          </div>

          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2"/>
            <label className="artist__name" htmlFor="answer-2">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея"/>
              Краснознаменная дивизия имени моей бабушки
            </label>
          </div>

          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3"/>
            <label className="artist__name" htmlFor="answer-3">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея"/>
              Lorde
            </label>
          </div>
        </form>
      </section>
    </section>
    )
  }

  handleClick() {
    const answers = document.querySelectorAll(`.game__artist input`);

    answers.forEach((answer) => {
      answer.addEventListener(`click`, () => {
        ReactDOM.render(<Screen />, document.getElementById('root'))
      });
    });
  }
}


export default GameArtist;

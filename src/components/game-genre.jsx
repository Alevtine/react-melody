import React from 'react';

class GameGenre extends React.Component {
  componentDidMount() {
    // старт таймера
  }

  handleClick() {
    const { currentLevel, nextLevel } = this.props;
    nextLevel();
  }

  render() {
    return (
      <section className="game game--genre">
        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks">
            <div className="track">
              <button className="track__button track__button--play" type="button" />
              <div className="track__status">
                <audio />
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" />
                <label className="game__check" htmlFor="answer-1">Отметить</label>
              </div>
            </div>

            <div className="track">
              <button className="track__button track__button--play" type="button" />
              <div className="track__status">
                <audio />
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2" />
                <label className="game__check" htmlFor="answer-2">Отметить</label>
              </div>
            </div>

            <div className="track">
              <button className="track__button track__button--pause" type="button" />
              <div className="track__status">
                <audio />
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3" />
                <label className="game__check" htmlFor="answer-3">Отметить</label>
              </div>
            </div>

            <div className="track">
              <button className="track__button track__button--play" type="button" />
              <div className="track__status">
                <audio />
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4" />
                <label className="game__check" htmlFor="answer-4">Отметить</label>
              </div>
            </div>

            <button className="game__submit button" onClick={this.handleClick} type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

export default GameGenre;

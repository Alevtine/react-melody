import React from 'react';

import GameGenre from './game-genre.jsx';
import GameArtist from './game-artist.jsx';


const Question = (props) => {
  const currentLevel = props;
  const gameType = [<GameGenre />, <GameArtist />];
  const getRandom = arr => arr[Math.floor(Math.random()*arr.length)];

  return (
    <section>
      {getRandom(gameType)}
    </section>
  )
}

export default Question;

import React from 'react';

import GameGenre from './game-genre.jsx';
import GameArtist from './game-artist.jsx';


const Question = (props) => {
  const gameType = [<GameGenre key={props.currentLevel} {...props} />, <GameArtist key={props.currentLevel} {...props} />];
  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  return (
    <section>
      {getRandom(gameType)}
    </section>
  );
};

export default Question;

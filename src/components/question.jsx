import React from 'react';

import GameGenre from './game-genre.jsx';
import GameArtist from './game-artist.jsx';


const Question = (props) => {
  const questionType = {
    artist: <GameArtist key={props.currentLevel} {...props} />,
    genre: <GameGenre key={props.currentLevel} {...props} />,
  };

  return (
    <section>
      {questionType[props.currentQuestion.type]}
    </section>
  );
};

export default Question;

import React from 'react';

const Lives = (props) => {
  const renderedLives = [];
  for (let i = 1; i <= props.lives; i++) {
    renderedLives.push(<div key={i} className="wrong" />);
  }

  return (
    <div className="game__mistakes">
      {renderedLives}
    </div>
  );
};

export default Lives;

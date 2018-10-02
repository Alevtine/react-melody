import React from 'react';

const Lives = (props) => {
  const { lives, livesTotal } = props;
  const renderedLives = [];
  for (let i=1; i<=lives; i++) {
    renderedLives.push(<div key={i} className="wrong"></div>)
  }

// Each child in an array or iterator should have a unique "key" prop.
  return (
    <div className="game__mistakes">
      {renderedLives}
    </div>
  )
}

export default Lives;

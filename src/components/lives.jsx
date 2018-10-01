import React from 'react';

const Lives = (props) => {
  const { lives, livesTotal } = props;
  const renderedLive = <div className="wrong"></div>;

  return (
    <div className="game__mistakes">
      {renderedLive}
    </div>
  )
}

export default Lives;

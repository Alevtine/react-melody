import React from 'react';

const ReplayButton = (props) => {
  return <button className="result__replay" type="button" onClick={props.nextScreen}>Попробовать ещё раз</button>;
}

export default ReplayButton;

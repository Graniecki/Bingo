import React, { useContext } from 'react';
import './PlayPannel.css';

import { NumberContext } from '../NumberContext';

export const PlayPannel = ({setNumber}) => {
  const number = useContext(NumberContext);

  const randomize = () => {
    setNumber(Math.ceil(Math.random() * 90));
  };

  return (
    <>
      <h1>{number}</h1>
      <button
        type="button"
        onClick={randomize}
      >
        Change number
      </button>
    </>
  );
};

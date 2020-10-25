import React from 'react';
import './BingoHeader.css';

export const BingoHeader = () => {
  const BINGO = ['B', 'I', 'N', 'G', 'O'];

  return (
    <div className="bingo__header">
      {BINGO.map(letter => (
        <div
          className="header-cell"
          key={letter}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

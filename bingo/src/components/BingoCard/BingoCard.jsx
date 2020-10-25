import React from 'react';
import './BingoCard.css';

import { BingoHeader } from '../BingoHeader';
import { BingoBody } from '../BingoBody';

export const BingoCard = React.memo(
  ({ setWin }) => {

    return (
      <div className="bingo__card">
        <BingoHeader/>
        <BingoBody setWin={setWin} />
      </div>
    );
  }
);

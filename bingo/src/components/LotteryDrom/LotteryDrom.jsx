import React from 'react';
import './LotteryDrom.css';

import { PlayPannel } from '../PlayPannel';

export const LotteryDrom = ({ setNumber }) => {

  return (
    <div className="lottery-drom">
      <PlayPannel setNumber={setNumber} />
    </div>
  );
};

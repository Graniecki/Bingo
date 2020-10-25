import React, { useMemo } from 'react';
import './BingoBody.css';

import { BodyCells } from '../BodyCells';

export const BingoBody = React.memo(
  ({ setWin }) => {
    const bingoNumbers = useMemo(() => {
      const randomArr = Array.from(
        { length: 25 },
        () => Math.ceil(Math.random() * 90),
      );

      randomArr[12] = 'FREE';

      return randomArr;
    }, []);
  
    return (
      <div className="bingo__body">
        {bingoNumbers.map((num, index) => (
          <BodyCells
            key={`${Math.random() * 100}`}
            num={num}
            index={index}
            setWin={setWin}
          />
        ))}
      </div>
    );
  }
);

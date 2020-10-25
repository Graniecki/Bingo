/* eslint-disable default-case */
import React, { useContext, useState } from 'react';
import './BodyCells.css';

import classNames from 'classnames';
import { NumberContext } from '../NumberContext';
import { winCombinations } from '../winCheck';

export const BodyCells = React.memo(
  ({ num, index, setWin }) => {
    const number = useContext(NumberContext);
    const [selected, setSelected] = useState(false);
    const row = winCombinations;
    const selectNumber = (event) => {
      const { innerText, dataset } = event.target;

      if (
          (+innerText !== number && innerText !== 'FREE')
          || [...event.target.classList].includes('selected')
        ) {
        return;
      }

      setSelected(true);

      // Checking a rows
      switch (true) {
        case +dataset.order <= 5 :
          row[0]++;
          break;
        case +dataset.order <= 10 :
          row[1]++;
          break;
        case +dataset.order <= 15 :
          row[2]++;
          break;
        case +dataset.order <= 20 :
          row[3]++;
          break;
        case +dataset.order <= 25 :
          row[4]++;
          break;
      }

      // Checking a columns
      switch (true) {
        case +dataset.order === 1 :
        case +dataset.order === 6 :
        case +dataset.order === 11 :
        case +dataset.order === 16 :
        case +dataset.order === 21 :
          row[5]++;
          break;
        case +dataset.order === 2 :
        case +dataset.order === 7 :
        case +dataset.order === 12 :
        case +dataset.order === 17 :
        case +dataset.order === 22 :
          row[6]++;
          break;
        case +dataset.order === 3 :
        case +dataset.order === 8 :
        case +dataset.order === 13 :
        case +dataset.order === 18 :
        case +dataset.order === 23 :
          row[7]++;
          break;
        case +dataset.order === 4 :
        case +dataset.order === 9 :
        case +dataset.order === 14 :
        case +dataset.order === 19 :
        case +dataset.order === 24 :
          row[8]++;
          break;
        case +dataset.order === 5 :
        case +dataset.order === 10 :
        case +dataset.order === 15 :
        case +dataset.order === 20 :
        case +dataset.order === 25 :
          row[9]++;
          break;
      }

      // Checking a diagonals
      switch (true) {
        case +dataset.order === 1 :
        case +dataset.order === 7 :
        case +dataset.order === 19 :
        case +dataset.order === 25 :
          row[10]++;
          break;
        case +dataset.order === 5 :
        case +dataset.order === 9 :
        case +dataset.order === 17 :
        case +dataset.order === 21 :
          row[11]++;
          break;
        case +dataset.order === 13 :
          row[10]++;
          row[11]++;
          break;
      }

      if (row.some(number => number === 5)) {
        setWin(true);
      }
    };

    return (
      <div
        className={classNames({
          'body-cell': true,
          'selected': selected,
        })}
        data-order={index + 1}
        onClick={selectNumber}
      >
        {num}
      </div>
    );
  }
);

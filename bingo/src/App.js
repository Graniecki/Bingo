import React, { useState } from 'react';
import './App.css';

import { NumberContext } from './components/NumberContext';
import { BingoCard } from './components/BingoCard';
import { LotteryDrom } from './components/LotteryDrom';
import { WinBlock } from './components/WinBlock';

function App() {
  const [number, setNumber] = useState('-');
  const [win, setWin] = useState(false);

  return (
    <NumberContext.Provider value={number}>
      <div className="App">
        <LotteryDrom setNumber={setNumber} />
        <BingoCard setWin={setWin} />
        {win && <WinBlock />}
      </div>
    </NumberContext.Provider>
  );
}

export default App;

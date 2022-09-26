import React, { useState, useEffect } from 'react';
import Peg from './Peg';

const Row = ({
  colors,
  active,
  setActiveRow,
  secretComb,
  setEndGame,
  setMessage,
  initGame,
  setInitGame,
  round,
  setHasLost,
}) => {
  const [combination, setCombination] = useState(['', '', '', '']);
  const [pegs, setPegs] = useState(['', '', '', '']);
  const arr = [];

  const onSetColor = (index) => {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].selected) {
        combination[index] = colors[i].color;
        setCombination([...combination]);
        if (combination[i] === '') {
          setCombination([...combination]);
        }
        if (combination[index] === colors[i].color) {
          setCombination([...combination]);
        }
      }
    }
  };

  const isWon = (arr) => {
    if (arr[0] === 'G' && arr[1] === 'G' && arr[2] === 'G' && arr[3] === 'G')
      return true;
    else return false;
  };

  const checkComb = () => {
    for (let i = 0; i < secretComb.length; i++) {
      if (combination[i] === secretComb[i]) {
        arr.unshift('G');
      } else if (
        combination[i] !== secretComb[i] &&
        combination.includes(secretComb[i])
      )
        arr.push('Y');
    }
    {
      while (arr.length < 4) {
        arr.push('');
      }
    }
    setPegs([...arr]);
  };

  const onCheckBtn = () => {
    if (combination.includes('')) {
      alert('Pick any of colors and ill out empty spaces!');
      return;
    }
    checkComb();
    if (isWon(arr)) {
      setActiveRow(11);
      setEndGame(true);
      setMessage('YOU WON!');
    } else if (round === 9 && !isWon(arr)) {
      setHasLost(true);
      setActiveRow(11);
      setEndGame(true);
      setMessage('YOU LOST!');
    }
    setActiveRow((prev) => prev + 1);
  };

  useEffect(() => {
    if (initGame) {
      setPegs(['', '', '', '']);
      setCombination(['', '', '', '']);
      setInitGame(false);
    }
  }, [initGame]);

  return (
    <div className={active ? 'row' : 'row-disabled'}>
      {combination.map((color, index) => {
        return (
          <div
            className={`empty-color-${color}`}
            key={index}
            onClick={() => {
              onSetColor(index);
            }}
          ></div>
        );
      })}
      <button className='check-btn' onClick={onCheckBtn}>
        Check
      </button>
      <Peg pegs={pegs} setPegs={setPegs} />
    </div>
  );
};

export default Row;

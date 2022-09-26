import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import Row from './Row';
import Rules from './Rules';

let secretComb = ['', '', '', ''];

const Main = () => {
  const [endGame, setEndGame] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [message, setMessage] = useState('');
  const [initGame, setInitGame] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const [colors, setColors] = useState([
    { id: 0, selected: false, color: 'R', className: 'R' },
    { id: 1, selected: false, color: 'G', className: 'G' },
    { id: 2, selected: false, color: 'Y', className: 'Y' },
    { id: 3, selected: false, color: 'B', className: 'B' },
    { id: 4, selected: false, color: 'O', className: 'O' },
    { id: 5, selected: false, color: 'P', className: 'P' },
  ]);

  const getSecretComb = () => {
    let arr = [];
    for (let i = 0; i < secretComb.length; i++) {
      while (secretComb[i] === '') {
        let random = Math.floor(Math.random() * 6);
        if (!arr.includes(random)) {
          arr.push(random);
          secretComb[i] = colors[random].color;
        }
      }
    }
  };

  useEffect(() => {
    getSecretComb();
    console.log(secretComb, 'SECRET!');
  }, []);

  const onPlayAgain = () => {
    for (let i = 0; i < colors.length; i++) {
      colors[i].selected = false;
      colors[i].className = colors[i].color;
    }
    secretComb = ['', '', '', ''];
    setHasLost(false);
    setEndGame(false);
    setActiveRow(0);
    setInitGame(true);
    getSecretComb();
    console.log(secretComb);
  };

  const colorStyle = {
    margin: '1px',
    cursor: 'pointer',
    marginRight: '1px',
  };

  return (
    <div className='main-container'>
      <div className='rules'>
        <Rules />
      </div>
      <div className='btn-colors'>
        <div style={colorStyle}>
          <Colors style={colorStyle} colors={colors} setColors={setColors} />
        </div>
      </div>
      <div className='main'>
        {[...new Array(10)].map((row, index) => (
          <div key={index}>
            <Row
              setEndGame={setEndGame}
              secretComb={secretComb}
              active={activeRow === index}
              round={activeRow}
              setActiveRow={setActiveRow}
              colors={colors}
              setMessage={setMessage}
              initGame={initGame}
              setInitGame={setInitGame}
              message={message}
              setHasLost={setHasLost}
            ></Row>
          </div>
        ))}
      </div>
      {endGame && (
        <div className='end-game'>
          {!hasLost && <h6>Congratulatons</h6>}
          {message}
          {hasLost && (
            <div className='secret-comb'>
              <h6>Solution:</h6>
              <div className='secret-colors'>
                {secretComb.map((color, i) => (
                  <div
                    style={colorStyle}
                    className={`${color}-selected`}
                    key={i}
                  ></div>
                ))}
              </div>
            </div>
          )}
          <button onClick={onPlayAgain} className='play-again'>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;

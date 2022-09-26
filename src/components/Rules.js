import React, { useState } from 'react';

const Rules = () => {
  const [showRules, setShowRules] = useState('Show rules');

  const toogleRules = () => {
    showRules === 'Show rules'
      ? setShowRules('Hide rules')
      : setShowRules('Show rules');
  };

  return (
    <div>
      <h5 className='rules-btn' onClick={() => toogleRules()}>
        {showRules}
      </h5>
      {showRules !== 'Show rules' && (
        <div className='rules'>
          <h6>
            On every start of the game a secret color combination is randomly
            generated. Try to guess the combination, in both order and color,
            within ten turns. To enable check button you need to pick color from
            main colors and fill out empty combination. After submitting a row,
            a small green square is shown for each circle in a correct position
            and color. A yellow square indicates the existence of a correct
            color in an incorrect postion. More info on
            <a href='https://en.wikipedia.org/wiki/Mastermind' target='_blank'>
              Wikipedia
            </a>
          </h6>
        </div>
      )}
    </div>
  );
};

export default Rules;

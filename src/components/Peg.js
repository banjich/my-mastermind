import React from 'react';

const Peg = ({ pegs }) => {
  return (
    <div className='pegs'>
      {pegs.map((peg, index) => {
        return <div className={`peg-${peg}`} key={index}></div>;
      })}
    </div>
  );
};

export default Peg;

import React from 'react';

const Colors = ({ colors, setColors }) => {
  const selectColor = (id) => {
    colors[id].selected = true;
    setColors(() => [...colors]);
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].id === id) {
        if (colors[i].selected) {
          colors[i].className = `${colors[i].color}-selected`;
          setColors(() => [...colors]);
        }
      }
      if (colors[i].id !== id && colors[i].selected) {
        colors[i].className = `${colors[i].color}`;
        colors[i].selected = false;
        setColors(() => [...colors]);
      }
    }
  };

  const colorStyle = {
    marginRight: '1px',
  };

  return (
    <div className='colors'>
      {colors.map((color) => {
        return (
          <div
            style={colorStyle}
            className={color.className}
            key={color.id}
            onClick={() => selectColor(color.id)}
          ></div>
        );
      })}
    </div>
  );
};

export default Colors;

import React, { useState, useEffect } from 'react';

const TextInput = ({ style, addItem }) => {
  const [newItem, setNewItem] = useState('');
  const keyDownHandler = (e) => {
    console.log(newItem);
    if (e.keyCode === 13 && typeof addItem === 'function') {
      addItem(newItem);
      setNewItem('');
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', keyDownHandler);
  });

  const onTextChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div style={style}>
      <input
        placeholder="Enter text here"
        style={{
          width: '100%',
          outline: 'none',
          border: '0px',
          marginTop: '8px',
          marginBottom: '8px',
        }}
        value={newItem}
        onChange={onTextChange}
      />
    </div>
  );
};

export default TextInput;

import React from 'react';
import cancel from './assets/cancel.png';

const Item = ({
  item,
  style,
  onClick,
  onDragEnter,
  onDragStart,
  onDragEnd,
  position,
}) => {
  return (
    <div
      onClick={(e) => onClick(e)}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        margin: '5px',
        alignItems: 'center',
      }}
      onDragStart={(e) => onDragStart(e, position)}
      onDragEnter={(e) => onDragEnter(e, position)}
      onDragEnd={(e) => onDragEnd(e, position)}
      onDragOver={(e) => e.preventDefault()}
      draggable
    >
      <div style={{ display: 'inline' }}> {item} </div>
      <img
        src={cancel}
        alt="cancel widget"
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#DDDDDD',
          padding: '5dp',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      />
    </div>
  );
};

export default Item;

import React, { useRef } from 'react';
import Item from './Item';
import TextInput from './TextInput';

const ReactBulletDnd = ({ children, style, data, set }) => {
  const draggingItem = useRef(null);
  const draggingItemIndex = useRef(null);
  const draggEnterIndex = useRef(null);

  const onClick = (e) => {
    console.log('this is a click event of ', e.target);
  };

  const onDragStart = (e, index) => {
    draggingItem.current = data[index];
    draggingItemIndex.current = index;
  };

  const onDragEnter = (e, index) => {
    if (draggingItemIndex.current === index) return;
    if (index === null || draggEnterIndex.current === index) return;
    draggEnterIndex.current = index;
    const ItemCopy = JSON.parse(JSON.stringify(data));
    ItemCopy.splice(draggingItemIndex.current, 1);
    ItemCopy.splice(index, 0, draggingItem.current);
    draggingItemIndex.current = index;
    set(ItemCopy);
  };

  const onDragEnd = (e, index) => {
    draggingItem.current = null;
    draggingItemIndex.current = null;
    draggEnterIndex.current = null;
  };

  return (
    <div style={{ ...style }}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {React.Children.map(children, (child) => {
          if (child.type.name !== 'TextInput') {
            return React.cloneElement(child, {
              onClick,
              onDragEnter,
              onDragStart,
              onDragEnd,
            });
          } else {
            return React.cloneElement(child, {
              addItem: child.props.addItem,
            });
          }
        })}
      </div>
    </div>
  );
};

ReactBulletDnd.Item = Item;
ReactBulletDnd.TextInput = TextInput;

export default ReactBulletDnd;

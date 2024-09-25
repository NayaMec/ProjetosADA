import React from 'react';
import ListItem from '../ListItem';

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
}

export default List;

import React from 'react';

const Item = ({ item, deleteItem }) => (
  <li>
    <h2>{item.title}</h2>
    <button onClick={() => deleteItem(item.id)}>Delete</button>
  </li>
);

export default Item;

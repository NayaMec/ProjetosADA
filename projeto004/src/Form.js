import React, { useState } from 'react';

const Form = ({ addItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new item"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;

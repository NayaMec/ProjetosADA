import React, { useState } from 'react';
import Form from './components/form';
import List from './components/list';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <Form addItem={addItem} />
      <List items={items} />
    </div>
  );
}

export default App;

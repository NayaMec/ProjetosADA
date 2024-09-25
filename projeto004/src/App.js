import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ItemList from './ItemList';
import Form from './Form';
import Footer from './Footer';
import Loader from './Loader';
import './App.css';


const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const addItem = async (newItem) => {
    const response = await axios.post(API_URL, newItem);
    setItems([...items, response.data]);
  };

  const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      {loading ? <Loader /> : <ItemList items={items} deleteItem={deleteItem} />}
      <Form addItem={addItem} />
      <Footer />
    </div>
  );
}

export default App;

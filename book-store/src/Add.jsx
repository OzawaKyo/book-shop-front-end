import React, { useState } from 'react';
import './Add.css'

export default function Add() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { title, author, price, description, cover };
    
    fetch('https://book-shop-api.herokuapp.com/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" />
      <input type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)} placeholder="author" />
      <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="price" />
      <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="description" />
      <input type="text" name="cover" value={cover} onChange={e => setCover(e.target.value)} placeholder="cover" />
      <button type="submit">submit</button>
    </form>
  );
}

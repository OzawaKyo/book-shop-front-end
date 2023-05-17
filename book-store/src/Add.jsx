import { useEffect , useState } from "react";
import './Add.css';
import { API_URL } from './config.js';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import {useNavigate} from 'react-router-dom'

export default function Add() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageUpload = event.target.elements.imageUpload.files[0];

    if (!imageUpload) {
      return;
    }

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    await uploadBytes(imageRef, imageUpload);

    const imageUrl = await getDownloadURL(imageRef);
    setCover(imageUrl);

    const data = { title, author, price, description, cover: imageUrl };

    try {
      const response = await fetch(`${API_URL}/books/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log(responseData);
      navigate(`/Shop`);
    } catch (error) {
      console.error(error);
    }
  };



  return (
      <form className="add1" onSubmit={handleSubmit}>
      <input className="inp1" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input className="inp1" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input className="inp1" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <textarea className="inp1" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <div className="upl">
        <input className="inp1" type="file" name="imageUpload" required />
      </div>
      <button className="button-39" type="submit">Add Book</button>
    </form>

    
  );
}

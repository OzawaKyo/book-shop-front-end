import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Fbook from './Fbook';
import './Shop.css'
import death from '/death.png'
import john from '/john.jpg'
import omni from '/omni.jpg'
import {useNavigate } from 'react-router-dom'

export default function Shop() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
        axios.get('http://localhost:8000/books/')
          .then(response => {
            const fetchedBooks = response.data;
            setBooks(fetchedBooks);
          })
          .catch(error => console.log(error));
      }, []);
  const navigate = useNavigate();

      
  return (
    <div>
      <Navbar />
      <div className='fbook'>
        <div className='lefty'>
          <h1 className='new'>New & Trending </h1>
          <h4 className='explore'>Explore new worlds from authors </h4>
          <div className='book-list'>
            <img src={death} width='210' className='bookz' />
            <img src={john} width='210' className='bookz' />
            <img src={omni} width='210' className='bookz' />
          </div>
        </div>
        <div className='mura'>
          <Fbook />
        </div>
      </div>
      <div className='lay'>
      <h1 className='new' align='center'>Spring Collection </h1>
      <div className='layout'>
      {Array.isArray(books) && books.map(book => (
      <div className='erd'>
          <img onClick={()=>{navigate(`/shop/${book.id}`);}} src={book.cover} className='ktab' width='200' height='300px' />
          <h5 className='smia' align='center'>{book.title}</h5>
      </div>
))}
          </div>
          </div>
    </div>
  );
}   
  
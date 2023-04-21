import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Book.css'

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${id}`)
      .then(response => {
        const fetchedBook = response.data;
        setBook(fetchedBook);
      })
      .catch(error => console.log(error));
  }, [id]);

  console.log(book);

  const handleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <Navbar />
      {book && (
        <div className='chri'>
          <img className='dftar' src={book.cover} alt={book.title} />
          <div className='limn'>
            <h2 className='smito'>{book.title}</h2>
            <h3 className='katib'>By <span className='b'>{book.author}</span></h3>
            <div className='atmina'>
              <h2 className='taman' >{book.price} MAD</h2>
              <h2 className='taman zayd'>{parseInt(book.price) *1.8 } MAD</h2>
            </div>
            <hr  className='ster'/>
            <div className='desc'>
            <p className={`book-description${showFullDescription ? ' book-description--full' : ''}`}>
            {book.description}
          </p>
          {!showFullDescription && (
            <button className='dots' onClick={handleShowFullDescription}>...</button>
          )}
            </div>
            <hr className='ster' />
            <button className='button-39'>ADD TO CART</button>
          </div>
        
        
        </div>
      )}
    </div>
  );
}

export default Book;

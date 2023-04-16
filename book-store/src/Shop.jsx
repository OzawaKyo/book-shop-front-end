import { useState, useEffect } from 'react';
import axios from 'axios';

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
    
  return (
    <div>
      {Array.isArray(books) && books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
      <p>{book.author}</p>
      </div>
      ))}
    </div>
  );
} 
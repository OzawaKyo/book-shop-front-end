import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Search.css'

export default function Search() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/books/')
      .then(response => {
        const fetchedBooks = response.data;
        // filter the books based on the search query
        const filteredBooks = fetchedBooks.filter(book =>
          book.title.toLowerCase().includes(name.toLowerCase()) ||
          book.author.toLowerCase().includes(name.toLowerCase()) ||
          book.description.toLowerCase().includes(name.toLowerCase())
        );
        setBooks(filteredBooks);
      })
      .catch(error => console.log(error));
  }, [name]);


  return (
    <div className='search' >
        <Navbar />
            <div className='t9lab'>
                <h1>Search results for "{name}" :</h1>
                <div className='layout'>
                
                    {books.map(book => (
                    <div>
                        <div className='erd'>
                            <a target='_blanck' href={(`/shop/${book.id}`)} >
                                <img target='_blank' src={book.cover} className='ktab' width='200' height='300px' />
                            </a>
                            <h5 className='smia' align='center'>{book.title}</h5>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    </div>
    
  );
}

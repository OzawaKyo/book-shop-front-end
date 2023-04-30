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
                <h1 className='new w'>Search results for "{name}" :</h1>
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

                        {(name=='porno')?
                        <img src="https://firebasestorage.googleapis.com/v0/b/book-shop-a252c.appspot.com/o/WhatsApp%20Image%202023-04-15%20at%2015.15.10.jpg?alt=media&token=9c205132-05d5-4882-a01d-cc137f777731" alt="" />
                        :<p></p>
                        }
                </div>
            </div>
    </div>
    
  );
}

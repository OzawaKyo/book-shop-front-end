import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Book.css'
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [authUser,setAuthUser]=useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/books/${id}`)
      .then(response => {
        const fetchedBook = response.data;
        setBook(fetchedBook);
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(()=>{
    const listen = onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user)
        }else{
            setAuthUser(null);
        }
    });
    return()=>{
        listen();
    }
  },[]);

  const handleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  const [addedToCart, setAddedToCart] = useState(false); 


  const addToCart = (event) => {
    event.preventDefault();
    if(authUser !== null) {
      const user_id = authUser.uid;
      const book_id = id;
      const data = {'user':user_id,'book':book_id}
      
      fetch('http://localhost:8000/cart/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setAddedToCart(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      navigate('/log');
      console.log('User is not signed in');
    }
  }

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
              <h2 className='taman zayd'>{parseFloat(parseFloat(book.price) *1.8).toFixed(2) } MAD</h2>
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
            {addedToCart?<p>added</p>:<button type='submit' onClick={addToCart} className='button-39'>ADD TO CART</button>  }
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;

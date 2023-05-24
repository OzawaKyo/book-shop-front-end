import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Fbook from './Fbook';
import './Shop.css'
import death from '/death.png'
import john from '/john.jpg'
import omni from '/omni.jpg'
import {useNavigate } from 'react-router-dom'
import { API_URL } from './config.js';
import { motion } from 'framer-motion';


export default function Shop() {
  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
    axios
      .get(`${API_URL}/books/`)
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
        <motion.div
          className='lefty'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className='new'>New & Trending</h1>
          <h4 className='explore'>Explore new worlds from authors</h4>
          <div className='book-list'>
            <motion.img
              onClick={() => {
                navigate(`/shop/23`);
              }}
              src={death}
              width='210'
              className='bookz'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.img
            onClick={() => {
              navigate(`/shop/22`);
            }}
              src={john}
              width='210'
              className='bookz'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.img
            onClick={() => {
              navigate(`/shop/21`);
            }}
              src={omni}
              width='210'
              className='bookz'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </div>
        </motion.div>
        <motion.div
          onClick={() => {
            navigate(`/shop/24`);
          }}
          className='mura'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Fbook />
        </motion.div>
      </div>
      <div className='lay'>
        <motion.h1
          className='new'
          align='center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Summer Collection
        </motion.h1>
        <div className='layout'>
          {Array.isArray(books) &&
            books.map(book => (
              <motion.div
                className='erd'
                key={book.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <motion.img
                  onClick={() => {
                    navigate(`/shop/${book.id}`);
                  }}
                  src={book.cover}
                  className='ktab'
                  width='200'
                  height='300px'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.h5
                  className='smia'
                  align='center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {book.title}
                </motion.h5>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

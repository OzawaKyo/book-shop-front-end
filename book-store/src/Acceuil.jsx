import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '/books.png';
import book from '/hamid.png';
import key from '/key2.png';
import './Acceuil.css';
import { motion } from 'framer-motion';

export default function Acceuil() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      navigate(`/Search/${searchValue}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='acceuil'>
      <motion.div
        className='acc-left'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='best'>Best choice</h2>
        <img src={books} alt='' className='books' />
        <div className='goto hide'>
          <div className='enter-container'>
            <input
              type='text'
              placeholder='Search'
              className='enter-input'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className='arrow-icon' onClick={handleSearch}>
              &#10132;
            </span>
          </div>
          <button className='go' onClick={() => navigate('/Shop')}>
            Go to shop
          </button>
        </div>
        <div className='parag'>
          <p className='par'>
            Regular reading allows you to better formulate your own thoughts.
            Our <span className='team'>team of professionals</span> will always
            help you make up your mind and find a book for fun activities
          </p>
        </div>
      </motion.div>
      <motion.img
        src={book}
        alt=''
        className='book'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src={key}
        alt=''
        className='no-img digi'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.div
        className='goto hh no-img'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button className='go' onClick={() => navigate('/Shop')}>
          Go to shop
        </button>
      </motion.div>
    </div>
  );
}

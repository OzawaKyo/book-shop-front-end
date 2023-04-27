import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '/books.png';
import book from '/hamid.png';
import key from '/key2.png';
import './Acceuil.css';

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
      <div className='acc-left'>
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
      </div>
      <img src={book} alt='' className='book' />
      <img src={key} alt='' className='no-img digi' />
      <div className='goto hh no-img'>
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
    </div>
  );
}

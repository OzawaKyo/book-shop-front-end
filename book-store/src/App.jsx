// import './App.css'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './Home';

function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/books/')
//       .then(response => {
//         const fetchedBooks = response.data;
//         setBooks(fetchedBooks);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       {Array.isArray(books) && books.map(book => (
//         <div key={book.id}>
//           <h2>{book.title}</h2>
//           <p>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

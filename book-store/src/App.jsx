// import './App.css'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './Home';
import Shop from './Shop';
import Add from './Add';
import Book from './Book';
import Search from './Search';
import Log from './Log';
import Account from './Account';
import About from './About';
function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/shop/:id' element={<Book />} />
          <Route path='/Search/:name' element={<Search />} />
          <Route path='/log' element={<Log />} />
          <Route path='/account' element={<Account />} />
          <Route path='/About' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App

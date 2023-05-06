import logo from "/bookz.png"
import search from "/search-line.png"
import './Navbar.css'
import './buttons.css'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect ,useRef } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import account from '/shopping.png'

export default function Navbar() {
  const navigate = useNavigate();
  const [isClicked, setClicked] = useState(false);
  const inputRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setClicked(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  ////////////////////////////////////////////////

    const [authUser,setAuthUser]=useState(null);


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

    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log('signed out');
        }).catch(error => console.log(error))
    }
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <h1 className="hidden" onClick={() => { navigate('/Shop'); }}>Shop</h1>
          <hr className="nav-hr hidden" />
          <h1 className="hidden">About us</h1>
          <hr className="nav-hr hidden " />
          <img src={logo} alt="" width="120" className="logoo hidee " onClick={() => { navigate('/shop'); }} />
        </div>
        <img src={logo} alt="" width="120" className="logoo hidden" onClick={() => { navigate('/'); }} />

        <div className="right-nav">
          <hr className="nav-hr hidden" />
          {!isClicked ? (
            <img src={search} className="" onClick={() => setClicked(true)} />
          ) : (
            <form className="reff" ref={inputRef} onSubmit={(e) => { e.preventDefault(); }}>
              <input value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="srch" type="text" name="" id="" />
            </form>
          )}
          <hr className="nav-hr hidden" />
          {authUser ?
          <img onClick={() => { navigate('/account ');}} src={account} width='36' />
            :
          <button onClick={() => { navigate('/log '); }} className="button-28 ">Sign up</button>

        }
        </div>
      </nav>
      <hr className="nav-hr2" />
    </div>
  );
}
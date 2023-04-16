import logo from "/logo2.jpg"
import search from "/search-line.png"
import './Navbar.css'
import './buttons.css'
import {useNavigate} from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate();

    return (
      <div >
        <nav className="navbar">
        <div className="left-nav">
            <img src={logo} alt="" width="70" onClick={()=>{navigate('/');}} />
            <hr className="nav-hr hidden "/>
            <h1 className="hidden" onClick={()=>{navigate('/Shop');}} >Shop</h1>
            <hr className="nav-hr hidden" />
            <h1 className="hidden">About us</h1>
        </div>
        <div className="right-nav">
            <hr className="nav-hr hidden" />
            <img src={search} className="hidden" />
            <hr className="nav-hr hidden" />
            <button className="button-28">Sign up</button>
        </div>
      </nav>
      <hr className="nav-hr2"/>
      </div>
    )
  }
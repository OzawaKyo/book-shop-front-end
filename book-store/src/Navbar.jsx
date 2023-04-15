import logo from "/logo2.jpg"
import search from "/search-line.png"
import './Navbar.css'
import './buttons.css'
export default function Navbar() {

    return (
      <div >
        <nav className="navbar">
        <div className="left-nav">
            <img src={logo} alt="" width="70" />
            <hr className="nav-hr"/>
            <h1>Shop</h1>
            <hr className="nav-hr" />
            <h1>About us</h1>
        </div>
        <div className="right-nav">
            <hr className="nav-hr" />
            <img src={search} />
            <hr className="nav-hr" />
            <button className="button-28">Sign up</button>
        </div>
      </nav>
      <hr className="nav-hr2"/>
      </div>
    )
  }
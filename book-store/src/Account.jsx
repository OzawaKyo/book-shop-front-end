import Navbar from "./Navbar";
import { useEffect , useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './Account.css'
import cart from '/cart.png'
import logout from '/logout.png'
import { useNavigate } from "react-router-dom";
import about from "/about.png"
import heart from "/heart.png"
import axios from 'axios';
import redx from '/redx.png'
 

function deleteData(id) {
    axios
      .delete(`http://127.0.0.1:8000/cart/${id}`)
      .then((response) => {
        console.log("Data deleted:", response.data);
        // Do something else, like updating state
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }
  
  export default function Account() {
    const [cartItems, setCartItems] = useState([]);
    const [authUser, setAuthUser] = useState(null);
    const [books, setBooks] = useState([]);
  
    const navigate = useNavigate();
    var total = 0;

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
      return () => {
        listen();
      };
    }, []);
  
    useEffect(() => {
      if (authUser && authUser.uid) {
        fetch("http://127.0.0.1:8000/cart/")
          .then((response) => response.json())
          .then((data) => {
            const filteredData = data.filter((item) => item.user === authUser.uid);
            setCartItems(filteredData);
            console.log(cartItems);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }, [authUser]);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/books/")
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("signed out");
          navigate("/log");
        })
        .catch((error) => console.log(error));
    };
  
    function handleDeleteClick(bookId) {
      deleteData(bookId);
      // Update the state of the component to remove the deleted item from the cart
      setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.book !== bookId));
    }
    return(
        <div>
            <Navbar />
            <div className="acca">
            <div className="acca-container">
                <div className="acca-left">
                    <div className="hi">
                        {authUser && authUser.displayName ? (
                        <h1 className="ini">{authUser.displayName.split(" ").map(name => name.charAt(0)).join("")}</h1>
                        ) : (
                        <h1 className="ini">G</h1>
                        )}
                        <div className="hi2">
                            <h2 className="iw">Hi,</h2>
                            {authUser && authUser.displayName ? (
                                <h2 className="iw2">{authUser.displayName.split(" ")[0]}</h2>
                            ) : (
                                <h2 className="iw2">Guest</h2>
                            )}
                        </div>
                    </div>
                    <div className="listt">
                        <div className="b4">
                            <img src={cart} className="logogo" />
                            <h2 className="bb">Cart</h2>
                        </div>
                        <hr className="hr3"/>
                        <div className="b4">
                            <img src={heart} className="logogo" />
                            <h2 className=" bb">WishList</h2>
                        </div>
                        <hr className="hr3"/>
                        <div className="b4">
                            <img src={about} className="logogo" />
                            <h2 className="bb">About us</h2>
                        </div>
                        <hr className="hr3"/>
                        <div className="b4">
                            <img src={logout} className="logogo" />
                            <h2 className="bb" onClick={userSignOut}>Sign out</h2>
                        </div>
                    </div>
                </div>
                <div className="acca-limn">
                  <div className="acca-right">
                      <h2 align='center'>My Cart</h2>
                      <div className="layoutg">
                      {Array.isArray(books) && books.map(book => (
                          Array.isArray(cartItems) && cartItems.map(cart => (
                                  (book.id==cart.book)?
                                  <div className="erdg">
                                      <img onClick={() => {handleDeleteClick(cart.id);window.location.reload();}} className='ktabg' width='100' height='150px' src={book.cover} alt=""/>
                                      <h1 className='smiag' align='center'>{book.title}</h1>
                                  </div>  
                                  :<></>
                              ))    
                      ))}
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                          <filter id="red-filter">
                          <feColorMatrix type="matrix"
                              values="1 0 0 0 0
                                      0 0 0 0 0
                                      0 0 0 0 0
                                      0 0 0 1 0" />
                          </filter>
                      </defs>
                      </svg>             
                  </div>
                  <div className="lte7t">
                        <div className="hiddd">
                        {Array.isArray(books) && books.map(book => (
                          Array.isArray(cartItems) && cartItems.map(cart => (
                                  (book.id==cart.book)?
                                  total = parseFloat(total)+ parseFloat(book.price) 
                                  :<></>
                              ))    
                      ))}
                        </div>
                        <h1>Total : {total} MAD</h1>
                        <button className="button-39 bttt">Check In</button>
                  </div>
                </div>
                
            </div>
        </div>

        </div>
    )
} 

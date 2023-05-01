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
 
export default function Account(){

    const [cartItems, setCartItems] = useState([]);
    const [authUser,setAuthUser]=useState(null);

    useEffect(() => {
        if (authUser && authUser.uid) {
          fetch('http://127.0.0.1:8000/cart/')
            .then(response => response.json())
            .then(data => {
              const filteredData = data.filter(item => item.user === authUser.uid);
              setCartItems(filteredData);
              console.log(filteredData);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
      }, [authUser]);


    const navigate = useNavigate();
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
            navigate('/log');
        }).catch(error => console.log(error))
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
                <div className="acca-right">
                                
                </div>
            </div>
        </div>

        </div>
    )
} 

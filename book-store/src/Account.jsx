import Navbar from "./Navbar";
import { useEffect , useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './Account.css'
import cart from '/cart.png'
import logout from '/logout.png'
import { useNavigate } from "react-router-dom";

export default function Account(){
    const [authUser,setAuthUser]=useState(null);

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
                        <h1 className="ini">MR</h1>
                        <div className="hi2">
                            <h2 className="iw">Hi,</h2>
                            {authUser && authUser.displayName ? (
                                <h2 className="iw2">{authUser.displayName}</h2>
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
                            <img src={logout} className="logogo" />
                            <h2 className=" bb">Sign out</h2>
                        </div>
                        <hr className="hr3"/>
                        <div className="b4">
                            <img src={cart} className="logogo" />
                            <h2 className="bb">Cart</h2>
                        </div>
                        <hr className="hr3"/>
                        <div className="b4">
                            <img src={logout} className="logogo" />
                            <h2 className="bb" onClick={userSignOut}>Sign out</h2>
                        </div>
                        <hr className="hr3"/>
                    </div>
                </div>
                <div className="acca-right">
                <div>{authUser ? <p>{`Signed IN as ${authUser.email}` }</p>: <p>Signed Out</p>}</div>

                </div>
            </div>
        </div>

        </div>
    )
} 

import Navbar from "./Navbar"
import Login from "./Login"
import SignUp from './SignUp'
import './Log.css'
import { useEffect , useState } from "react";
import { auth , provider } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";


export default function Log(){
    const [left,setLeft]=useState('0')

    const leftHandle = ()=>{
        setLeft(0);
    }

    const rightHandle = ()=>{
        setLeft(1);
    }
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

    if (authUser) {
        // Redirect to /account if user is logged in
        return <Navigate to="/account" />;
      }
    return(
        <div>
            <Navbar />
            <div className="logpage">
            <div className="log">
                {(left==0?<div className="log2">
                    <div className="type" >
                    <h1  onClick={leftHandle} className="sign">Sign Up</h1>
                    <hr className="hr3" />
                    <h1 onClick={rightHandle}>Log in</h1>
                    </div>
                    <SignUp />
                </div>:
                <div className="log2">
                    <div className="type" >
                        <h1 onClick={leftHandle} >Sign Up</h1>
                        <hr className="hr3" />
                        <h1 onClick={rightHandle} className="sign">Log in</h1>
                    </div>
                    <Login />
                </div> )}
            </div>
            
        </div>
        </div>
        
    )
}
import Navbar from "./Navbar"
import Login from "./Login"
import SignUp from './SignUp'
import './Log.css'
import { useState } from "react"
import { auth , provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Log(){
    const [left,setLeft]=useState('0')

    const leftHandle = ()=>{
        setLeft(0);
    }

    const rightHandle = ()=>{
        setLeft(1);
    }

    const handleSignIn =()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

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
                    <button className="button-39" onClick={handleSignIn}>Sign in with Google</button>
                </div> )}
                
                
                
            </div>
        </div>
        </div>
        
    )
}
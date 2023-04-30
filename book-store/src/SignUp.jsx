import Navbar from "./Navbar";
import { useState } from "react";
import { auth , provider } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './SignUp.css'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const SignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            // Update the user's profile with their first name and last name
            updateProfile(userCredential.user, {
              displayName: `${firstName} ${lastName}`,
            });
          })
          .catch((error) => {
            setError(error.message.replace('Firebase: ', ''));
          });
      };
    
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
          })
          .catch((error) => {
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
        <form className="signup" onSubmit={SignUp}>
            
            <div className="formm">
              <div className="smiaaa">
                <div className="kniaaa">
                  <label className="labell" >First Name:</label>
                  <input
                      className="inputt i"
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="kniaaa">
                  <label className="labell" >Last Name:</label>
                  <input
                      className="inputt i"
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                
              </div>
              
              <label className="labell" >Email:</label>
              <input
                  className="inputt"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <label className="labell" >Password:</label>
              <input
                  className="inputt"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button-39 btn" type="submit" >Sign up</button>
  
            </div>
              <button className="button-39 btn" onClick={handleSignIn}>Sign Up in with Google</button>

         </form>
         {error && <p>{error}</p>}
        </div>
    )
}

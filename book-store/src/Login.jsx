import Navbar from "./Navbar";
import { useState } from "react";
import { auth , provider } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from './AuthDetails'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
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
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });}

  return (
    <div>
      <form className="signup" onSubmit={SignIn}>
        <div className="formm">
          <label className="labell">Email:</label>
          <input
            className="inputt"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labell">Password:</label>

          <input
            className="inputt"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-39 btn" type="submit">login</button>
        </div>
        <button className="button-39 btn" onClick={handleSignIn}>Log in with Google</button>
      </form>
      {error && <p>{error}</p>}
      {/* <AuthDetails /> */}
    </div>
  )
}

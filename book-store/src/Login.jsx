import Navbar from "./Navbar";
import { useState } from "react";
import {auth} from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from './AuthDetails'

export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      

    return(
        <div>
        <form onSubmit={SignIn}>
            <h1>Log in</h1>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit" >login</button>
        </form>
        <AuthDetails />
        </div>
    )
}
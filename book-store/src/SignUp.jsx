import Navbar from "./Navbar";
import { useState } from "react";
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      

    return(
        <div>
        <form onSubmit={SignUp}>
            <h1>Sign Up</h1>
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
            <button type="submit" >Sign up</button>
        </form>
        </div>
    )
}
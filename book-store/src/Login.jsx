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
        <form className="signup" onSubmit={SignIn}>
        <div className="formm">
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
            <button className="button-39 btn" type="submit" >login</button>
            </div>
        </form>
        {/* <AuthDetails /> */}
        </div>
    )
}
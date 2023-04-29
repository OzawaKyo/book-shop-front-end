import { useEffect , useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthDetails(){
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

    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log('signed out');
        }).catch(error => console.log(error))
    }

    return(
        <div>{authUser ? <p>{`Signed IN as ${authUser.email}` }</p>: <p>Signed Out</p>}</div>
    )
}
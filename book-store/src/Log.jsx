import Navbar from "./Navbar"
import Login from "./Login"
import SignUp from './SignUp'

export default function Log(){
    return(
        <div>
            <Navbar />
            <SignUp />
            <Login />
        </div>
    )
}
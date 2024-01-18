import {auth, provider} from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth"
import '../style/Auth.css'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const Auth = (props) => {

    const { setIsAuth } = props

    const signInWithGoogle = async () =>{
        try{
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            console.log(result.user.email)
            setIsAuth(true);
        } catch (err){
            console.log(err)
        }
    };

    return <div className="auth">
        <p>Bejelentkezés Google fiókkal</p>
        <button onClick={signInWithGoogle}>Bejelentkezés</button>
    </div>
}

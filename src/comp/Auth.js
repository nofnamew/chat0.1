import {auth, provider} from "../firebase-config.js"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import '../style/Auth.css'
import React from "react"
import { useState } from "react"
import { SignIn } from "./SignIn.js"
import { SignUp } from "./SignUp.js"
import { SignGoogle } from "./SignGoogle.js"

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const Auth = (props) => {

    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))

    return <div className="auth">
        <SignUp setIsAuth={setIsAuth}/>

        <SignGoogle setIsAuth={setIsAuth}></SignGoogle>
    </div>
}

import {auth, provider} from "../firebase-config.js"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import '../style/Auth.css'
import React from "react"
import { useState } from "react"
import { SignIn } from "./SignIn.js"

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const SignGoogle = (props) => {

    const { setIsAuth } = props

    const signInWithGoogle = async () =>{
        try{
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true);
            window.location.reload(false); 
        } catch (err){
            console.log(err)
        }
    };



    return(
        <>
            <button onClick={signInWithGoogle}>Google</button>
        </>
    )
}


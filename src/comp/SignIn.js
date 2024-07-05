import React from "react";
import { useState } from "react"
import {auth, provider} from "../firebase-config.js"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

export const SignIn = (props) =>{


    const { setIsAuth } = props

    const [email,setEmail] = useState("")

    const [password,setPassword] = useState("")

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return(
        <>
            <div className="signin">
                <form onSubmit={signIn}>
                    <h1>Bejelentkezés:</h1>
                    <input 
                        type="email" 
                        placeholder="Email cím" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input 
                        type="password" 
                        placeholder="Jelszó" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <button type="submit">Bejelentkezés</button>      

            </form>
        </div>
        </>
    )
}
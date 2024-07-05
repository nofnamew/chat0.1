import React from "react";
import { useState } from "react"
import {auth, provider} from "../firebase-config.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const SignUp = (props) =>{


    const { setIsAuth } = props

    const [email,setEmail] = useState("")

    const [password,setPassword] = useState("")

    const signUp = (e) =>{
        const auth = getAuth()
        
        createUserWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
        }).catch((error) =>{
            console.log(error)
        })

    }

    return(
        <>
            <div className="signin">
                <form onSubmit={signUp}>
                    <h1>Belépés:</h1>
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

                    <button type="submit">Belépés</button>      

            </form>
        </div>
        </>
    )
}
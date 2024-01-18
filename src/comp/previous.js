import React from "react";
import {db} from "../firebase-config";


export const Previous = () =>{

    const submit = async (e) =>{
        e.preventDefault();
        if (NewMessage === "") return

        await addDoc(messageRef, {
            user: auth.currentUser.displayName,
            room: roomInputRef
        })

        setNewMessage("")
    };

    
    return(
        <>
            <h1>previous</h1>
        </>
    )
}
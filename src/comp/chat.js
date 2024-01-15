import React, { useEffect } from "react";
import { useState } from "react";
import {addDoc, collection ,serverTimestamp, onSnapshot, query, where, orderBy} from 'firebase/firestore';
import { auth } from "../firebase-config";
import {db} from "../firebase-config";
import '../style/chat.css';

export const Chat = (props) => {
    const {room} = props

    const [NewMessage, setNewMessage] = useState("");

    const messageRef = collection(db, "messages")

    const [messages, setMessages] = useState([])

    useEffect(() =>{
        const queryMessages = query
        (
        messageRef, 
        where("room", "==", room), 
        orderBy("created")
        )


        const unsubscribe = onSnapshot(queryMessages, (snapshot) =>{
            let messages = []
            snapshot.forEach((doc) =>{
                messages.push({...doc.data(), id: doc.id})
            });

            setMessages(messages);
        });


        return () => unsubscribe();
    }, []);

    const submit = async (e) =>{
        e.preventDefault();
        if (NewMessage === "") return

        await addDoc(messageRef, {
            text: NewMessage,
            created: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        })

        setNewMessage("")
    };

    return(
        <>
            <div className="chat-app">
                <div className="header">
                    <h1>
                        Üdvözöllek a "{room}" nevű szobában!
                    </h1>
                </div>
                <div className="messages">
                    <div> {messages.map((message) => 
                        <div className="message" key={message.id}> 
                            <span className="user">{message.user}</span>
                            {message.text}
                        </div>  
                    )}</div>
                </div>
                <form onSubmit={submit} className="new-message-form" >

                    <input 
                        className="new-message-input" 
                        placeholder="Ide írd az üzenetett"
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={NewMessage}
                    ></input>


                    <button className="send-button" type="submit">Küld</button>
                </form>

                
            </div>
        </>
    )
}
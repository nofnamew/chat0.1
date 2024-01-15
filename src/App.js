import { useState, useEffect, useRef } from 'react';
import './App.css';
import React from 'react';
import { Auth } from './comp/Auth';
import Cookies from 'universal-cookie'
import { Chat } from './comp/chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'; 
const cookies = new Cookies();


function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setroom] = useState("")

  const refreshPage = () => { 
    window.location.reload(false); 
  }

  const signUserOut = async () =>{
    await signOut(auth)
    cookies.remove("auth-token")

    refreshPage()
  };

  const roomInputRef = useRef(null)
  if (!isAuth){

    return (
    <>
      <div className='App'>
        <Auth setIsAuth={setIsAuth}></Auth>
      </div>
    </>
    );
  }

  return (
  <>
    <>
    {room ?  (<Chat room={room}></Chat>): 

    (<div className='room'>
      <label>Szoba neve:</label>


      <input ref={roomInputRef}></input>


      <button onClick={() => setroom(roomInputRef.current.value)}>Belépés</button>



    </div>
      ) 
    
    
    }
      <div className="signout">
        <button onClick={signUserOut}>Kilépés</button>
      </div> 
    </>
  </>
  )
}

export default App;

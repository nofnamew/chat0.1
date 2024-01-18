import React from "react";
import { useRef, useState} from 'react';



export const Room = () =>{

    const roomInputRef = useRef(null)
    const [room, setroom] = useState("")

    return(
    <div className='room'>
      <label>Szoba neve:</label>


      <input ref={roomInputRef}></input>


      <button onClick={() => setroom(roomInputRef.current.value)}>Belépés</button>



    </div>
    )
}

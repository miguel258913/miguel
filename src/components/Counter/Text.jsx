//import React from 'react'
import { useState } from "react"
// componetne para mostrar y ocultar texto

const Text = () => {
    const [show, setShow] = useState(true);

    function handleShow(){
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <h2>Hola a todos</h2>} 
        </div>
    )
}

export default Text
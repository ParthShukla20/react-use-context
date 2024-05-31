import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Home from './home.jsx';

function Form(){
    const [user,setUser] = useState("");
    const [dynamic,setDynamic] = useState("");
    const handleChange = (event) =>{

        console.log("CLicked")
        setDynamic(event.target.value);
    }
    const handleClick = (event) =>{

        console.log("CLicked")
        setUser(dynamic)
    }

    return (
        <>
      <Home />
       <h1>Hello {user}</h1>
       <input type="text" placeholder=' Enter Your Name '  onChange={handleChange} />
       <button onClick={handleClick}>Submit</button>
        </>
    );
}


export default Form;
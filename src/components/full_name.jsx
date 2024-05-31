import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Home from './home.jsx';


function Name(){    
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [fullname,setFullname] = useState("");
    useEffect(()=>{

        alert("hello parth")
    })
    let full_name = fname + lname;
   
    function handleSubmit(event){

        event.preventDefault()
        console.log("clicked");
        full_name = fname + " " + lname;

        setFullname(full_name)
    

    }
    function handleFname(event){

       
        console.log("clicked");
        setFname(event.target.value);


    }
    function handleLname(event){

       
        console.log("clicked");
        setLname(event.target.value);


    }
    return (
        <>
        <Home />
            <form  onSubmit={handleSubmit}>

                <h1>Hello {fullname}</h1>
                <input type="text" placeholder='Enter First Name' onChange={handleFname} />
                <input type="text" placeholder='Enter last Name' onChange={handleLname} />
                <button type="submit">Submit</button>

            </form>
        </>
    );
}


export default Name;
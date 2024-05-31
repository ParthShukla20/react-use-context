import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Home from './home';
import { createContext, useContext } from 'react';
import Comp2 from "./com_2"

const userContext = createContext()
function Comp1(){

   
    var user = "Parth"
    return (
        <>
       <Home />
        <userContext.Provider value = {user}>
      
        <h1>Hello {user} </h1>
        <h1>Comp1 here</h1>
        <Comp2 />
        </userContext.Provider>
       
        </>
    )

}
export default Comp1;
export {userContext};
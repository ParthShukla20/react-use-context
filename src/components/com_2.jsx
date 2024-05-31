import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import { createContext, useContext } from 'react';
import Comp3 from "./com_3"
function Comp2(){

    var user = "Parth"
    return (
        <>
        <h1>Comp2 here </h1>
        <Comp3 />
        </>
    )

}
export default Comp2;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import { createContext, useContext } from 'react';
import { userContext} from './com_1';

function Comp3(){

    const user = useContext(userContext)
    return (
        <>
        <h1>Comp3 here</h1>
        <h1>Hello {user} </h1>
        </>
    )

}
export default Comp3;
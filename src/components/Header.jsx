import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Home from './home.jsx';

function Header(){
    const[title, setTitle] = useState("Hello")
    const [val, setVal] = useState(0);

    function handleCLick(){
    
        setVal(val+1);
        setTitle(val<=2 ? "Hello Parth 😊":"Stop😑😐")
    
    }
    function handleCLickNeg(){
    
        setVal(val-1);
        setTitle(val>2 ?"Stop😑😐":"Hello parth 😊")
    
    }

    return (
              <>
                <Home />
              <div>  <button type="button" onClick={handleCLick}>+</button>
              <button type="button" onClick={handleCLickNeg}>-</button>

             </div>
                <h1>{title} {val}</h1>
              
              
              </>
    )

}
export default Header;
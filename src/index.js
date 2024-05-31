import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Name from './components/full_name.jsx';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

import Home from './components/home.jsx';
import Comp1 from './components/com_1.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//     {/* <Header />
//     <Form />
//     <Name/> */}
//     <Boom />
//   </React.Fragment>
// )

root.render(
  <BrowserRouter>
    <Routes>
      
      <Route  path="/" element={<Home />} /> 
      <Route  path="/form" element={<Form />} />
      <Route  path="/name" element={<Name />} />
      <Route  path="/comp" element={<Comp1 />} />
      <Route  path="/header" element={<Header />} />
     
    </Routes>
  </BrowserRouter>
);

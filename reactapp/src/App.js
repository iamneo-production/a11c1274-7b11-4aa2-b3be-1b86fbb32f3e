import './App.css';
import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route}  from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;

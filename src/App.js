
import React from "react";
import  Login from "./pages/Login";
import Register from "./pages/Register";
import { Welcome } from './pages/Welcome';
import { TestPage } from './pages/TestPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Welcome />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/TestPage' element={<TestPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

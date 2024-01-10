
import React from "react";
import  Login from "./pages/Login";
import Register from "./pages/Register";
import { Welcome } from './pages/Welcome';
import TestPage from './pages/TestPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Protectedlogout, Protectedlogin } from "./pages/components/Protected";
import {Aboutpage} from './pages/Aboutpage';
import Helppage from "./pages/Helppage";
import Scorepage from "./pages/Scorepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Protectedlogin><Welcome /></Protectedlogin>} />
        <Route path='/Homepage' element={<Protectedlogout><Homepage /></Protectedlogout>} />
        <Route path='/TestPage' element={<Protectedlogout><TestPage /></Protectedlogout>} />
        <Route exact path="/register" element={<Protectedlogin><Register /></Protectedlogin>} />
        <Route exact path="/login" element={<Protectedlogin><Login /></Protectedlogin>} />
        <Route exact path="/Scorepage" element={<Scorepage />} />
        <Route path="/Aboutpage" element ={<Aboutpage />} />
        <Route path="/Helppage" element ={<Helppage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

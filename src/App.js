import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";

import About from "./components/About";
import Register from "./components/Register";
import Crousel from "./components/Crousel";


function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/crousel" element={<Crousel />}></Route>
          <Route path="/register" element={<Register />}></Route>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

import "./App.scss";
import React from "react";
import Home from "./views/Home/Home";
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import {useLocation} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

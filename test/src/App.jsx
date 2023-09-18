import "./App.scss";
import React from "react";
import Home from "./views/Home/Home";
import Detail from './views/Detail/Detail';
import {useLocation} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import NotFound from "./views/Error/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

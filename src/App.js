// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Forcast from "./components/Forcast";
// import { render } from "@testing-library/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/forcast" element={<Forcast />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

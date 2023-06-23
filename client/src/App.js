import React from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./components/Layout/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/signup" element = {<Register/>}/>
        <Route path="/login"  element = {<Login/>}/>
      </Routes>
    </div>
  );
}

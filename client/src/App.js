import React from "react";
import { Route , Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Start from "./components/Layout/Start";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Start/>}/>
        <Route path="/signup" element = {<Register/>}/>
        <Route path="/login"  element = {<Login/>}/>
      </Routes>
    </div>
  );
}

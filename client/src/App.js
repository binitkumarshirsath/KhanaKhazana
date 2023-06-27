import React from "react";
import { Route , Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Start from "./components/Layout/Start";
import { ContextProvider } from "./components/ContextReducer/CotextReducer";
import Cart from "./components/Cart/Cart";



export default function App() {
  return (
    <div>
      <ContextProvider>
      <Routes>
        <Route path="/" element = {<Start/>}/>
        <Route path="/signup" element = {<Register/>}/>
        <Route path="/login"  element = {<Login/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
      </ContextProvider>
    </div>
  );
}

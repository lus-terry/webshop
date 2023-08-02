import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Dodajemo ToastContainer
import { Login, Signup } from "./pages";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer /> {/* Dodajemo ToastContainer ovdje */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
